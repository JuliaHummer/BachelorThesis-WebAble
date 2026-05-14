export const ariaRoles = {
  id: "aria-roles",
  title: "ARIA Roles",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "ARIA roles provide additional information about elements to assistive technologies. They define what an element is and how it should behave.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Screen readers rely on roles to understand and announce elements correctly. Without proper roles, custom components may not be usable.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Use semantic HTML first",
        "Only use ARIA when necessary",
        "Ensure role, state and behavior match",
        "Test with keyboard and screen reader",
        
      ],
    },
    {
      heading: "Code example",
      type: "code",
      language: "html",
      content: `<div role="button" tabindex="0"
  onclick="handleClick()"
  onkeydown="if(event.key==='Enter'||event.key===' '){handleClick()}">
  Menu
</div>`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Using ARIA instead of semantic HTML",
        },
        {
          title: "Missing keyboard support on ARIA elements",
        },
        {
          title: 'Incorrect roles (e.g. role="button" without behavior)',
        },
        {
          title: "Overusing ARIA",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/standards-guidelines/aria/"],
};
