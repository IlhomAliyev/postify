import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import './PostForm.css';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <div className="PostForm">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Enter the title of the post"
        />
        {/* Неуправляемый / Неконтролируемый компонент */}
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Enter a description of the post"
        />
        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
