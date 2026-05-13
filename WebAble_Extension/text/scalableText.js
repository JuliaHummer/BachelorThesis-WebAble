export const scalableText = {
  id: "scalable-text",
  title: "Scalable Text",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content:
        "Users should be able to enlarge text up to 200% without losing content or functionality. This also applies to buttons, labels and other text elements. ",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Some people need larger text to read content comfortably.",
    },
    {
      heading: "Exceptions",
      type: "list",
      items: ["Images of text", "Captions"],
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Use relative units like rem, em or %",
        "Avoid fixed heights or containers that cut off text",
        "Test zoom up to 200% in your browser",
      ],
    },
    {
      heading: "Code example",
      type: "text",
      content: "Heading",
    },
    {
      type: "code",
      language: "css",
      content: `h1 {
  font-size: 2rem;
}`,
    },
    {
      type: "text",
      content: "Body",
    },
    {
      type: "code",
      language: "css",
      content: `body {
  font-size: 1rem;
  line-height: 1.5;
}`,
    },
    {
      type: "text",
      content: "Button",
    },
    {
      type: "code",
      language: "css",
      content: `.button {
  font-size: 1rem;
  padding: 0.5em 1em;
}`,
    },
    {
      type: "text",
      content: "Container",
    },
    {
      type: "code",
      language: "css",
      content: `.card {
  max-width: 40rem;
  padding: 1rem;
}`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Using fixed sizes without testing zoom",
          language: "css",
          code: `body {
  font-size: 16px;
}`,
        },
        {
          title: "Text gets cut off inside containers",
          language: "css",
          code: `.card {
  height: 100px;
  overflow: hidden;
}`,
        },
        {
          title: "Text overlaps at larger sizes",
          language: "css",
          code: `.title {
  position: absolute;
  top: 10px;
}`,
        },
        {
          title: "Buttons do not scale properly",
          language: "css",
          code: `.button {
  font-size: 14px;
  height: 40px;
}`,
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html"],
};
