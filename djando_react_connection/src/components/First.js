import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseURL = "http://127.0.0.1:8000/product/display?format=json";
function First() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPost(response.data);
      console.log(post)

    });
  },[]);
  if (!post) return null;
  return (
    <div>
      <h1>{post.id}</h1>
      <h1>{post.price}</h1>
      <h1>{post.name}</h1>
      <h1>{post.description}</h1>
     <h1>{post.stars}</h1>
    </div>
  );
}
export default First