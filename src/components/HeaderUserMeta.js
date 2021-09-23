import React from "react";

const HeaderUserMeta = ({ ProfileURL, Avatar, FullName }) => {
  return (
    <div className="UserMeta">
      <a href={ProfileURL}>
        <img src={Avatar} alt={FullName} />
        {FullName}
      </a>
      <span className="nav-links">
        <a href="/">Home</a>
        <a href="/">Create</a>
      </span>
    </div>
  );
};

export default HeaderUserMeta;
