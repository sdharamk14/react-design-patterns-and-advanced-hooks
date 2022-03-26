import React from "react";
import WithFetch from "./HOC/WithFetch";

const url = "https://jsonplaceholder.typicode.com/posts";
const PostList = ({ data }) => {
  const displayList = () => {
    if (Array.isArray(data) && data.length) {
      return data.map((item, index) => (
        <li key={index}>{item.name ? item.name : item.title}</li>
      ));
    } else {
      return <li>No data for display</li>;
    }
  };

  return <ul>{displayList()}</ul>;
};

export default WithFetch(PostList, url);
