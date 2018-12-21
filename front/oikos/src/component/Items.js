import React from "react";

const Item = ({ question }) => {
  return (
    <div>
      {console.log(question)}
      {/* {post.map(e => (
        <div key={e.id}>
          <h2>{e.title.rendered}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }}
          />
        </div> */}
      ))}
    </div>
  );
};

export default Item;
