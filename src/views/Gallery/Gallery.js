import React from "react";
import Slideshow from "components/Slide/Slideshow";
import styles from "./Gallery.module.scss";
import Grid from "components/Grid/Grid";
import GalleryImage from "./GalleryImage/GalleryImage";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Gallery__intro}>
        <div className={styles.Gallery__intro__description}>
          A record of my life, from my kitchen, daily life to different
          advantures.
        </div>

        <div className={styles.Gallery__intro__hashtag}>#Travelling</div>
        <div className={styles.Gallery__intro__hashtag}>#Cooking</div>
        <div className={styles.Gallery__intro__hashtag}>#Myself</div>
      </div>

      <h4>My life in Finland</h4>

      <Slideshow />

      <h4>All photos</h4>

      <div>Travelling</div>

      <Grid gapSize="lg">
        {[
          {
            imgSrc:
              "https://images.unsplash.com/photo-1584331317832-aaed03ba7158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            caption: "Some caption",
            time: "August 2019"
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1584344914986-59d45e25773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            caption: "Some caption",
            time: "August 2019"
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1584346884836-46e6d0d72db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            caption: "Praesent ac purus ac lorem sollicitudin faucibus.",
            time: "August 2019"
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1584430437982-a63466a16d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            caption: "Some caption",
            time: "August 2019"
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1584895738330-2e2cae9e8355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",

            caption: "Some caption",
            time: "August 2019"
          }
        ].map(({ imgSrc, caption, time }) => (
          <GalleryImage imgSrc={imgSrc} caption={caption} time={time} />
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;
