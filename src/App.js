import { useState } from "react";
import { marked } from "marked";
import { TextareaAutosize } from "@mui/material";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  ---
  [title](https://www.example.com)
  ---
  \`code\`
  \`\`\`
  multi-line code
  \`\`\`
  > blockquote
  ---
  1. First item
  2. Second item
  3. Third item
  ---
  - First item
  - Second item
  - Third item
  ---
  ![alt text](image.jpg)
  ---
  **bold text**
  ---
  *italicized text*
  `);

  marked.setOptions({breaks:true})

  return (
    <>
      <TextareaAutosize
      minRows={3}
      style={{ width: 200 }}
      id="editor"
      onChange={(e) => {setText(e.target.value)}}
      value={text}
      />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </>
  );
}

export default App;
