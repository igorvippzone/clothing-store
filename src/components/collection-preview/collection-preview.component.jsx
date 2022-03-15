import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      {/* <Link to={history.push(title)}>{title.toUpperCase()}</Link> */}
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.name + item.id}  item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
