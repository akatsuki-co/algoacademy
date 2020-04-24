import React, { useRef, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';

const HighlightedMarkdown = ({ children }) => {
  const rootRef = useRef()

  useEffect(() => {
    rootRef.current.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [children]);

  return (
    <div ref={rootRef}>
      <Markdown>{children}</Markdown>
    </div>
  );
}

export default HighlightedMarkdown