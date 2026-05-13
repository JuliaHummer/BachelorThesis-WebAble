export const colourContrast = {
  id: "colour-contrast",
  title: "Colour Contrast",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "Colour contrast is the difference between text and its background. Good contrast makes text easier to read for everyone.",
    },
    {
      type: "list",
      items: [
        "Normal text: at least 4.5:1",
        "Large text (18pt or 14pt bold): at least 3:1",
      ],
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Low contrast makes text hard or impossible to read. It especially affects people with low vision or reduced contrast sensitivity.",
    },
    {
      type: "list",
      items: [
        "Level AA (minimum standard): 4.5:1 for normal text",
        "Level AAA (enhanced): 7:1 for normal text",
      ],
    },
    {
      heading: "Exceptions",
      type: "list",
      items: [
        "Disabled (inactive) UI elements",
        "Decorative text",
        "Hidden content",
        "Text inside complex images",
        "Logos and brand names",
      ],
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Check contrast early in your design",
        "Avoid light-on-light and dark-on-dark combinations",
        "Use tools to verify contrast",
      ],
    },
    {
      type: "text",
      content: "Use a contrast checker tool to verify your colour combinations before publishing.",
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Light text on light background",
        },
        {
          title: "Dark text on dark background",
        },
        {
          title: "Using colour alone to convey meaning",
        },
        {
          title: "Text on busy images",
        },
        {
          title: "Low contrast in buttons or links",
        },
        {
          title: "Placeholder text that is too faint",
        },
      ],
    },
  ],
  sources: [
    "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
    "https://colourcontrast.cc/",
  ],
};
