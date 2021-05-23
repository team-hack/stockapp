import React from "react";
import "./page.css";

interface PageProps {
  title: String;
  content: String;
}

const Page: React.FC<PageProps> = ({
  title = "Default Page",
  content = "Hello World",
}) => {
  return (
    <>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </>
  );
};

export { Page };
