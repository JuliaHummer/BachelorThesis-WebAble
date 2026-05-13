export const zoomingContent = {
  id: "zooming-content",
  title: "Zooming Content",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "Content should adapt when users zoom in. Users should not need to scroll horizontally to read or use the interface.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Some users zoom in to see content more clearly. If the layout does not adapt, it becomes difficult or impossible to use. ",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Use responsive layouts",
        "Avoid fixed widths",
        "Ensure content reflows into one column when zoomed",
        "Test at 200% zoom without horizontal scrolling"
      ],
    },
    {
      heading: "Code example",
      type: "code",
      language: "css",
      content: `.container {
max-width: 100%;
}`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Fixed width layouts (content overflows when zoomed)",
          language: "css",
          code: `.container {
width: 1200px;
}`,
        },
        {
          title: "Content overlaps or disappears",
        },
        {
          title: "Text and images do not adapt",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"],
};
