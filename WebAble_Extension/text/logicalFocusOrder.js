export const logicalFocusOrder = {
  id: "logical-focus-order",
  title: "Logical Focus Order",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "Interactive elements should receive focus in a logical and predictable order when navigating with a keyboard. The focus order should usually match the visual layout of the page. ",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Keyboard users rely on a clear and predictable navigation flow. If the order is confusing, users may lose orientation and struggle to use the interface.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Follow the natural order of your HTML",
        "Avoid manually changing focus order with tabindex",
        "Keep related elements (like form fields) together",
      ],
    },
    {
      heading: "Code example",
      type: "text",
      content: "Good: natural DOM order",
    },
    {
      type: "code",
      language: "html",
      content: `<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <button>Submit</button>
</form>`,
    },
    {
      type: "text",
      content: "Bad: broken focus order",
    },
    {
      type: "code",
      language: "html",
      content: `<input type="text" tabindex="3">
<input type="email" tabindex="1">
<button tabindex="2">Submit</button>`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Using tabindex to control order",
        },
        {
          title: "Visual order ≠ DOM order",
          text: "Elements look ordered, but keyboard navigation feels random",
        },
        {
          title: "Skipping elements",
          text: "Important elements are not reachable via keyboard",
        },
        {
          title: "Dynamic content not handled properly",
          text: "Focus jumps unexpectedly when content changes",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html"],
};
