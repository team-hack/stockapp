import React from "react";
import "./page.css";

interface PageProps {
  title: string;
  content: string;
}

const Page = ({ title, content }: PageProps): JSX.Element => {
  return (
    <>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </>
  );
};

export { Page };
