import { useState } from "react";

const useFilteredItems = ({ items }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(_tag => _tag !== tag));
    } else {
      setSelectedTags([tag, ...selectedTags]);
    }
  };

  const getFilteredItems = () => {
    if (selectedTags.length === 0) {
      return items;
    }

    return items.filter(
      ({ tags }) =>
        tags.filter(category => selectedTags.includes(category)).length > 0
    );
  };

  return { toggleTag, getFilteredItems, selectedTags };
};

export default useFilteredItems;
