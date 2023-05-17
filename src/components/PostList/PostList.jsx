import React from 'react';
import PostItem from '../PostItem/PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './PostList.scss';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Posts not found!
      </h1>
    );
  }

  return (
    <div className="PostList">
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;