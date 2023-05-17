import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import './PostForm.scss';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: `ID: ${Date.now()}`,
    };
    create(newPost);
    setPost({ title: '', body: '' });
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="PostForm">
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Enter the title of the post"
        />
        <textarea
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          name="description"
          placeholder="Enter a description of the post"
        ></textarea>
        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
