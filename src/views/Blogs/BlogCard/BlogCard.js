import React from "react";
import moment from "moment";
import styles from "./BlogCard.module.scss";

const BlogCard = ({ image, published, title, link }) => {
  return (
    <a
      href={link}
      className={styles.BlogCard__link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div key={title} className={styles.BlogCard}>
        <div className={styles.BlogCard__img}>
          <img src={image} alt="title" />
        </div>
        <div className={styles.BlogCard__details}>
          <div className={styles.BlogCard__details__title}>{title}</div>
          <div className={styles.BlogCard__details__date}>
            {moment(published).format("MMM DD,YYYY")}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
