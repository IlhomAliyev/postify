import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          addClass="open-btn"
          onClick={() => router(`/posts/${props.post.id}`)}
        >
          Open
        </MyButton>
        <MyButton
          addClass="delete-btn"
          onClick={() => props.remove(props.post)}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
