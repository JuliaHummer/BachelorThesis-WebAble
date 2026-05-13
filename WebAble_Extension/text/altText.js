export const altText = {
  id: "alt-text",
  title: "Alt Text",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content:
        "Images need an alternative text (alt attribute) that describes their content. This text is read by screen readers and is not visible on screen.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content:
        "It helps people who cannot see or hear understand the content. Without it, information can be lost.",
    },
    {
      heading: "Exceptions",
      type: "text",
      content: "Alt text is not needed for:",
    },
    {
      type: "list",
      items: [
        "Decorative elements",
        "Content that is hidden",
        "Purely visual formatting",
        "Images whose information is already provided in nearby text",
      ],
    },
    {
      type: "text",
      content: "Some content only needs a short description, not full alt text:",
    },
    {
      type: "list",
      items: [
        "Videos or audio",
        "CAPTCHAs",
        "Tests or sensory content",
      ],
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Describe the content of the image clearly and briefly",
        "Focus on the purpose, not every detail",
        "Use empty alt for decoration",
      ],
    },
    {
      type: "text",
      content: `Adding alt text later can be time-consuming. It is best to include it from the start.`,
    },
    {
      type: "text",
      content: `Tip: Always ask yourself: "Does this add important information or is it just decoration?"`
    },
    {
      heading: "Code example",
      type: "text",
      content: "Normal image",
    },
    {
      type: "code",
      language: "html",
      content: `<img src="cat.jpg" alt="A black cat sitting on a window sill">`,
    },
    {
      type: "text",
      content: "Decorative image (empty alt)",
    },
    {
      type: "code",
      language: "html",
      content: `<img src="decoration.png" alt="">`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Missing alt text completely",
          text: `Image has no alt attribute`,
        },
        {
          title: "Using file names as alt text",
          code: `<img src="cat.jpg" alt="cat123.jpg">`,
        },
        {
          title: "Too vague descriptions",
          code: `<img src="cat.jpg" alt="image">`,
        },
        {
          title: "Too much detail",
          code: `<img src="cat.jpg" alt="A black cat sitting on a wooden window sill looking outside at a tree with green leaves in the afternoon sun">`,
        },
        {
          title: "Repeating visible text",
          text: "Same text in image and alt text",
        },
        {
          title: "Not marking decorative images correctly",
          code: `<img src="decoration.png" alt="pattern">`,
        },
        {
          title: "Using alt text for SEO keywords",
          text: "Keyword stuffing instead of describing the image",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"],
};
