export const fullKeyboardNavigation = {
  id: "full-keyboard-navigation",
  title: "Full Keyboard Navigation",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content:
        "All functionality must be usable using a keyboard only. Users should not need a mouse to interact with the interface.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content:
        "Many people rely on the keyboard interface, including blind and some mobility impaired people.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Make all interactive elements focusable",
        "Ensure logical tab order",
        "Use semantic HTML (e.g. <button>, <a>)",
        "Avoid mouse-only interactions like hover-only menus",
        "Ensure all actions can be triggered with keyboard (Enter/Space)",
        "Try navigating your page using only the Tab key.",
      ],
    },
    {
      heading: "Code example",
      type: "text",
      content: "Preferred: use native button",
    },
    {
      type: "code",
      language: "html",
      content: `<button>Submit</button>`,
    },
    {
      type: "text",
      content: "Custom element: needs role, tabindex and keyboard handler",
    },
    {
      type: "code",
      language: "html",
      content: `<div role="button" tabindex="0"
  onclick="submitForm()"
  onkeydown="if(event.key==='Enter'||event.key===' '){submitForm()}">
  Submit
</div>`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Elements are not focusable",
          code: `<div onclick="openMenu()">Menu</div>`,
        },
        {
          title: "Missing keyboard interaction with no Enter or Space support",
          code: `<div onclick="submitForm()">Submit</div>`,
        },
        {
          title: "Incorrect tab order",
          text: "The focus jumps randomly through the page",
        },
        {
          title: "Hover-only interactions",
          text: "The content is only visible with mouse",
        },
        {
          title: "Focus gets trapped",
          text: "Users cannot leave a component",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"],
};
