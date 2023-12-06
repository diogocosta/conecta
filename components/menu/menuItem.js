import React, { useState, useEffect } from 'react'

const MenuItem = ({ itemHref, itemName, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemHref));
  }, [itemHref]);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
      <a href={`#${itemHref}`}
         onClick={handleClick}
         className={active}
         aria-label={`Scroll to ${itemName}`}>
        {itemName}
      </a>
  );
};

export default MenuItem;