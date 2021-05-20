import React from "react";
import "./page.css";

const Page = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </>
  );
};

export { Page };
