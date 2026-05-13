import { altText } from "./text/altText.js";
import { colourContrast } from "./text/colourContrast.js";
import { scalableText } from "./text/scalableText.js";
import { zoomingContent } from "./text/zoomingContent.js";
import { fullKeyboardNavigation} from "./text/fullKeyboardNavigation.js";
import { logicalFocusOrder } from "./text/logicalFocusOrder.js";
import { focusIndicators } from "./text/focusIndicators.js";
import { modalDialogs } from "./text/modalDialogs.js";
import { errorMessages } from "./text/errorMessages.js"; 
import { formLabels } from "./text/formLabels.js";
import { ariaRoles } from "./text/ariaRoles.js";

function createCodeBlock(language, content) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("code-block");

  const header = document.createElement("div");
  header.classList.add("code-header");

  const label = document.createElement("span");
  label.textContent = language.toUpperCase();

  const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

  const copyBtn = document.createElement("button");
  copyBtn.classList.add("copy-btn");
  copyBtn.innerHTML = `${copyIcon} Copy`;
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(content).then(() => {
      copyBtn.textContent = "✓ Copied!";
      setTimeout(() => { copyBtn.innerHTML = `${copyIcon} Copy`; }, 2000);
    });
  });

  header.appendChild(label);
  header.appendChild(copyBtn);

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = content;
  pre.appendChild(code);

  wrapper.appendChild(header);
  wrapper.appendChild(pre);
  return wrapper;
}

function renderContent(content, targetId) {
  const panel = document.getElementById(targetId);

  if (!panel) {
    console.error(`Panel with id "${targetId}" not found.`);
    return;
  }

  content.sections.forEach((section) => {
    if (section.heading) {
      const heading = document.createElement("h3");
      heading.textContent = section.heading;
      panel.appendChild(heading);
    }

    if (section.type === "text") {
      const p = document.createElement("p");
      p.textContent = section.content;
      panel.appendChild(p);
    }

    if (section.type === "list") {
      const ul = document.createElement("ul");

      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      panel.appendChild(ul);
    }

    if (section.type === "code") {
      panel.appendChild(createCodeBlock(section.language, section.content));
    }

    if (section.type === "mistakes") {
      const ul = document.createElement("ul");

      section.items.forEach((item) => {
        const li = document.createElement("li");

        // Titel
        const strong = document.createElement("strong");
        strong.textContent = item.title;
        li.appendChild(strong);

        // Text (optional)
        if (item.text) {
          const p = document.createElement("p");
          p.textContent = item.text;
          li.appendChild(p);
        }

        if (item.code) {
          li.appendChild(createCodeBlock(item.language || "HTML", item.code));
        }

        ul.appendChild(li);
      });

      panel.appendChild(ul);
    }
  });

  if (content.sources && content.sources.length > 0) {
    const sourcesDiv = document.createElement("div");
    sourcesDiv.classList.add("sources");

    const heading = document.createElement("h3");
    heading.textContent = "Sources";
    sourcesDiv.appendChild(heading);

    const ul = document.createElement("ul");
    content.sources.forEach((url) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      ul.appendChild(li);
    });
    sourcesDiv.appendChild(ul);
    panel.appendChild(sourcesDiv);
  }
}

renderContent(altText, "alt-text-panel");
renderContent(colourContrast, "colour-contrast-panel");
renderContent(scalableText, "scalable-text-panel");
renderContent(zoomingContent, "zooming-content-panel");
renderContent(fullKeyboardNavigation, "full-keyboard-navigation-panel");
renderContent(logicalFocusOrder, "logical-focus-order-panel");
renderContent(focusIndicators, "focus-indicators-panel");
renderContent(modalDialogs, "modal-dialogs-panel");
renderContent(errorMessages, "error-messages-panel");
renderContent(formLabels, "form-labels-panel");
renderContent(ariaRoles, "aria-roles-panel");
