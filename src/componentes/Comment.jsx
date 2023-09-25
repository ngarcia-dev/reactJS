import React, { Fragment } from "react";

const Comment = ({ author }) => {
  return (
    <Fragment>
      <h2>Comments</h2>
      <hr className="bg-light" />
      <div className="media">
        <img className="mr-3" src={author.avatarUrl} alt="" />
        <div className="media-body">
          <h5 className="mt-0">{author.name}</h5>
          {author.text}
        </div>
      </div>
    </Fragment>
  );
};

export default Comment;
