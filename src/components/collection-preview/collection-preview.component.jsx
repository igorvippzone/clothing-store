import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

import "./collection-preview.style.scss";

const CollectionPreview = ({routeName,title,items}) => {
  
  return (
    <div className="collection-preview">
      <h1 className="title"><Link to={`shop/${routeName}`}>{title.toUpperCase()}</Link></h1>

      {/* <h1 className="title">{title.toUpperCase()}</h1> */}
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
