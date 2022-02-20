import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items, history }) => {
  console.log(history);
  return (
    <div className="collection-preview">
      {/* <Link to={history.push(title)}>{title.toUpperCase()}</Link> */}
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name, ...otherItemProps }) => (
            <CollectionItem key={name + id} name={name} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
