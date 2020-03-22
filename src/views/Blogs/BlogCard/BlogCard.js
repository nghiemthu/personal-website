import React from "react";
import moment from "moment";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ post: { images, published, title, id } }) => {
  return (
    <Link to={`/blogs/${id}`} className={styles.BlogCard__link}>
      <div key={id} className={styles.BlogCard}>
        <div className={styles.BlogCard__img}>
          <img src={images[0].url} alt="title" />
        </div>
        <div className={styles.BlogCard__details}>
          <div className={styles.BlogCard__details__title}>{title}</div>
          <div className={styles.BlogCard__details__date}>
            {moment(published).format("MMM DD,YYYY")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
