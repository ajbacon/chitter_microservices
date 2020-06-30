import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListComments = ({ chirpId }) => {
  const [commentsList, setCommentsList] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${chirpId}/comments`
    );
    setCommentsList(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderComments = () => {
    return commentsList.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });
  };

  return <ul>{renderComments()}</ul>;
};

export default ListComments;
