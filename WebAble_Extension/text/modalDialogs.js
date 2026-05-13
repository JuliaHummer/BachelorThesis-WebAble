export const modalDialogs = {
  id: "modal-dialogs",
  title: "Modal Dialogs",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content:
        "A modal dialog is a layer that appears on top of the page and requires user interaction before returning to the main content.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content:
        "Keyboard and screen reader users must be able to interact with the modal and understand where they are. If not implemented correctly, users can get lost or stuck.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Move focus into the modal when it opens",
        "Keep focus inside the modal while it is open",
        "Return to the trigger element when it closes",
        "Ensure all actions are keyboard accessible",
        "Provide a clear way to close the modal",
        "Hide background content from keyboard navigation",
        "Try using your modal with only the keyboard",
      ],
    },
    {
      heading: "Code example",
      type: "code",
      language: "html",
      content: `<button id="open">Open modal</button>

<div role="dialog" aria-modal="true">
  <button>Close</button>
  <p>Modal content</p>
</div>
`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Focus not moved into modal",
          text: "Screen reader users stay on the background page and may not notice the modal opened.",
        },
        {
          title: "Focus escapes the modal",
          text: "Tab key reaches elements behind the modal, breaking the intended focus trap.",
        },
        {
          title: "No keyboard way to close the modal",
          text: "Users relying on keyboard cannot dismiss the modal (should support Escape key at minimum).",
        },
        {
          title: "Focus not returned after closing",
          text: "After closing, focus lands on the top of the page instead of the element that opened the modal.",
        },
        {
          title: "Background still active",
          text: "Background content remains reachable via Tab, confusing screen reader users.",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"],
};
