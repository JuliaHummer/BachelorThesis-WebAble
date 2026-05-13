export const formLabels = {
  id: "form-labels",
  title: "Form labels",

  sections: [
    {
        heading: "What is it?",
        type: "text",
        content: "Form inputs should have clear, visible labels that describe their purpose. These labels must be programmatically associated with their input."
    },
    {
    heading: "Why it matters",
    type: "text",
    content: "Labels help users understand what information is required. They are especially important for screen reader users and for people with cognitive impairments."
    },
    {
  heading: "How to implement it",
    type: "list",
    items: [
        "Use <label> elements linked with for and id",
        "Ensure labels are always visible",
        "Use clear and descriptive text",
        "Make sure the visible label matches the accessible name"
    ]
    },
    {
        heading: "Code example",
        type: "code",
        language: "html",
        content: ` <label for="email">Email:</label>
<input id="email" type="email">`
    },
    {
        heading:"Common mistakes",
        type: "mistakes",
        items: [
            {
                title: "Using placeholders instead of labels",
                code: `<input type="text" placeholder="Username">`
            },
            {
                title: "Label not associated with input",
                code: `<label>Name</label>
<input type="text">`
            },
            {
                title: "Unclear or vague labels",
                text: "Avoid labels like “Field 1” or “Enter value”."
            },
            {
                title: "Visible label does not match accessible name",
                text: "Screen reader reads something different"
            },
            {
                title: "Missing labels completely",
                text: "Users do not know what to enter"
            }
        ]
    }
  ],
  sources: ["https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html", "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"],
};