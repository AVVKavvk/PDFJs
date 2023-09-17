import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import DOMPurify from "dompurify";

const RichText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // Function to sanitize HTML and retain styling, including background-color
  const sanitizeHtmlWithStyle = (html) => {
    const sanitizedHtml = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ["b", "i", "u", "strong", "em", "span", "p", "br", "div", "table"],
      ALLOWED_ATTR: ["style"],
    });
    return sanitizedHtml;
  };

  function AA() {
    console.log(content);
  }

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        onBlur={(newContent) => {
          // Use the sanitizeHtmlWithStyle function to sanitize and retain styling
          const sanitizedContent = sanitizeHtmlWithStyle(newContent);
          setContent(sanitizedContent);
        }}
      />
      <button onClick={AA}>Click</button>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default RichText;
