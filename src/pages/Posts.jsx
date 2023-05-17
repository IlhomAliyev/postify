import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter/PostFilter';
import PostForm from '../components/PostForm/PostForm';
import PostList from '../components/PostList/PostList';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.scss';
import { getPageCount } from '../utils/page';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  //todo    СДЕЛАТЬ: (2:00:00) воспользоваться useMemo и сделать так чтобы "этот" массив
  //todo    не пересчитывался на каждом рендере

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="Posts">
      <MyButton onClick={() => setModal(true)}>Create a post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr noshade style={{ margin: '15px 0' }} />
      <PostFilter
        limit={limit}
        setLimit={setLimit}
        filter={filter}
        setFilter={setFilter}
      />
      {postError && (
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          An error has occurred: {postError}
        </h1>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Postify"
      />
      <div ref={lastElement} style={{ height: '20px' }}></div>
      {isPostsLoading && (
        <div id="centralizer">
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
