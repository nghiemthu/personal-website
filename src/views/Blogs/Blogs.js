import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./Blogs.module.scss";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    published: "July 07, 2020",
    title: "Top 5 free HOSTING sites with instructions",
    link: "https://devchallenges-blogs.web.app/Top-5-free-HOSTING-site/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    published: "July 07, 2020",
    title: "How to stay MOTIVATED while learning coding (or anything)",
    link: "https://devchallenges-blogs.web.app/how-to-stay-motivated/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80",
    published: "June 28, 2020",
    title: "What is devchallenges?",
    link: "https://devchallenges-blogs.web.app/what-is-devchallenges/",
  },
];

const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <h2>Blogs</h2>

      {posts &&
        posts.map(({ image, published, title, link }) => (
          <BlogCard
            image={image}
            published={published}
            title={title}
            link={link}
          />
        ))}
    </div>
  );
};

export default Blogs;
