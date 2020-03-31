import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import parse from "html-react-parser";
import styles from "./Post.module.scss";
import moment from "moment";
import PageLoader from "components/PageLoader/PageLoader";

const getPostEndpoint = id => {
  return `https://www.googleapis.com/blogger/v3/blogs/1674095771536069917/posts/${id}?key=AIzaSyAOqpl6wDeX6kzaPWRvty4q316kw1Y0exc&fetchImages=true`;
};

const Post = () => {
  const { id } = useParams();

  const getPost = useCallback(async () => {
    const response = await fetch(getPostEndpoint(id));
    const post = await response.json();

    setLoading(false);
    setPost(post);
  }, [id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.Post}>
      <Link className={styles.Post__backButton} to="/blogs">
        Back
      </Link>

      <div className={styles.Post__title}>{post.title}</div>
      {post.published && (
        <div className={styles.Post__date}>
          {moment(post.published).format("MMM DD,YYYY")}
        </div>
      )}

      <div className={styles.Post__content}>
        {post.content && parse(post.content)}
      </div>
    </div>
  );
};

export default Post;
