import React, { useState } from "react";
import styles from "./GalleryImages.module.scss";
import Grid from "components/Grid/Grid";
import classnames from "classnames";

import defaultImages from "../images";
import GalleryImage from "../GalleryImage/GalleryImage";

const GalleryImages = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(_tag => _tag !== tag));
    } else {
      setSelectedTags([tag, ...selectedTags]);
    }
  };

  const getFilteredImages = () => {
    if (selectedTags.length === 0) {
      return defaultImages;
    }

    return defaultImages.filter(
      ({ categories }) =>
        categories.filter(category => selectedTags.includes(category)).length >
        0
    );
  };

  return (
    <>
      <h4>All photos</h4>

      {[
        { value: "travel", label: "Travelling" },
        { value: "cooking", label: "Cooking" },
        { value: "myself", label: "Myself" }
      ].map(({ value, label }) => (
        <div
          key={value}
          className={classnames([
            styles.GalleryImages__tag,
            {
              [styles.GalleryImages__tag_selected]: selectedTags.includes(value)
            }
          ])}
          onClick={() => toggleTag(value)}
        >
          {label}
        </div>
      ))}

      <Grid gapSize="lg">
        {getFilteredImages().map(({ imgSrc, caption, time }) => (
          <GalleryImage
            imgSrc={imgSrc}
            caption={caption}
            time={time}
            key={caption}
          />
        ))}
      </Grid>
    </>
  );
};

export default GalleryImages;
