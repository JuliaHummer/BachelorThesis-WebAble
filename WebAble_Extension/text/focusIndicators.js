export const focusIndicators = {
  id: "focus-indicators",
  title: "Focus Indicators",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "A focus indicator shows which element is currently selected when navigating with a keyboard. It should be clearly visible and easy to distinguish from the surrounding interface.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Keyboard users rely on focus indicators to understand where they are on the page. Without them, navigation becomes confusing or impossible.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Do not remove default focus styles",
        "Ensure strong contrast between focus and background",
        "Make the focus indicator clearly visible through an outline, border or background change",
        "Ensure it is visible on all interactive elements"
    ],
    },
    {
      heading: "Code example",
      type: "code",
      language: "css",
      content: `button:focus {
  outline: 3px solid #000;
  outline-offset: 2px;
}`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Removing focus styles",
          language: "css",
          code: `:focus {
  outline: none;
}`,
        },
        {
          title: "Low contrast focus indicator",
        },
        {
          title: "Focus only on hover",
          text: "Styles are applied on :hover but not on :focus",
        },
        {
          title: "Inconsistent focus styles",
          text: "Elements have different or missing indicators",
        },
        {
          title: "Focus not visible on all elements",
          text: "Buttons or links have no focus state",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html", "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html"],
};
