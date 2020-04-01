import React from "react";
import Grid from "components/Grid/Grid";

import defaultImages from "../images";
import GalleryImage from "../GalleryImage/GalleryImage";
import useFilteredItems from "utils/useFilteredItems";
import SelectableTag from "components/SelectableTag/SelectableTag";

const GalleryImages = () => {
  const { toggleTag, getFilteredItems, selectedTags } = useFilteredItems({
    items: defaultImages
  });

  return (
    <>
      <h4>All photos</h4>

      {[
        { value: "travel", label: "Travelling" },
        { value: "cooking", label: "Cooking" },
        { value: "myself", label: "Myself" }
      ].map(({ value, label }) => (
        <SelectableTag
          key={value}
          selected={selectedTags.includes(value)}
          onClick={() => toggleTag(value)}
          label={label}
        />
      ))}

      <Grid gapSize="lg">
        {getFilteredItems().map(({ imgSrc, caption, time }) => (
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
