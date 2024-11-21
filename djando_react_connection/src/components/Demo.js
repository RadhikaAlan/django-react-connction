import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseURL = "http://127.0.0.1:8000/product/display?format=json";
function Demo() {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  },[]);
  if (!post) return null;
  return (
    <div>
      
    </div>
  )
}

export default Demo
