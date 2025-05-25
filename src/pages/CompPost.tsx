import React from 'react';
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import file from '../weeklycomp/post.md';


export default function () {
    const [markdown, setMarkdown] = useState("");
  
    useEffect(() => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);
  
    return (
        <div>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        </div>
      );
  }
