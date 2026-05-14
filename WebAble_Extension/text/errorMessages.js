export const errorMessages = {
  id: "error-messages",
  title: "Error Messages",

  sections: [
    {
      heading: "What is it?",
      type: "text",
      content: "When an error occurs, it should be clearly identified and explained. Users should understand what went wrong and how to fix it.",
    },
    {
      heading: "Why it matters",
      type: "text",
      content: "Clear error messages help users recover from mistakes quickly. Without them, users may feel confused or stuck.",
    },
    {
      heading: "How to implement it",
      type: "list",
      items: [
        "Clearly describe what went wrong",
        "Explain how to fix the error",
        "Place the message close to the relevant input",
        "Do not rely on colour alone to indicate errors",
        "Use clear and simple language",

      ],
    },
    {
      heading: "Code example",
      type: "code",
      language: "html",
      content: `<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-error" aria-invalid="true">

<span id="email-error">
  Please enter a valid email address.
</span>`,
    },
    {
      heading: "Common mistakes",
      type: "mistakes",
      items: [
        {
          title: "Errors only shown visually",
        },
        {
          title: "Unclear error messages",
        },
        {
          title: "No guidance on how to fix the error",
        },
        {
          title: "Error messages far away from input",
        },
        {
          title: "Too technical language",
        },
      ],
    },
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"],
};
