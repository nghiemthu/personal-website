import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import styles from "./Post.module.scss";

const getPostEndpoint = id => {
  return `https://www.googleapis.com/blogger/v3/blogs/1674095771536069917/posts/${id}?key=AIzaSyAOqpl6wDeX6kzaPWRvty4q316kw1Y0exc&fetchImages=true`;
};

const Post = () => {
  const { id } = useParams();

  const getPost = useCallback(async () => {
    const response = await fetch(getPostEndpoint(id));
    const post = await response.json();
    setPost(post);
  }, [id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const [post, setPost] = useState({});

  return (
    <div className={styles.Post}>
      <div className={styles.Post__title}>{post.title}</div>
      <div className={styles.Post__content}>
        {post.content && parse(post.content)}
      </div>
    </div>
  );
};

export default Post;
