import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./Blogs.module.scss";
import PageLoader from "components/PageLoader/PageLoader";

const POSTSAPI =
  "https://www.googleapis.com/blogger/v3/blogs/1674095771536069917/posts?key=AIzaSyAOqpl6wDeX6kzaPWRvty4q316kw1Y0exc&fetchImages=true";

const Blogs = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const response = await fetch(POSTSAPI);
    const { items } = await response.json();

    setLoading(false);
    setPosts(items);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.Blogs}>
      <h2>Blogs</h2>

      {posts && posts.map(post => <BlogCard post={post} />)}
    </div>
  );
};

export default Blogs;
