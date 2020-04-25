import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\
# Big Header

## Medium

### FDS

#### fdfds

##### dfdsfs

###### 5435w53

This is how to use JSX.

\`\`\`jsx
import React, { useRef, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface HighlightedMarkdownProps { 
  children: string;
}

export function HighlightedMarkdown({ children }: HighlightedMarkdownProps) {
  const rootRef = useRef<HTMLDivElement>();

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
\`\`\`

tsx is not yet supported by highlight.js [#1155](https://github.com/highlightjs/highlight.js/issues/1155)


`

const Example = () => <HighlightedMarkdown>{markdown}</HighlightedMarkdown>

export default Example
