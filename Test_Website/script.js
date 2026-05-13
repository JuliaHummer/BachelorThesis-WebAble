export const roles = {
  frontend: {
    title: "Senior Frontend Developer",
    body: "We are looking for a senior frontend engineer to lead development of our client-facing platform. You will work with design and product teams to ship performant, accessible interfaces used by thousands of professionals.",
  },
  ux: {
    title: "UX Research Lead",
    body: "As UX Research Lead you will define how we understand our users — running interviews, usability studies, and turning findings into actionable insights for product and design teams.",
  },
  pm: {
    title: "Product Manager",
    body: "We need a product thinker to own the roadmap for our matching platform. You will work across engineering, design, and business stakeholders to prioritise and ship features that matter.",
  },
};

window.openModal = function openModal(key) {
  const role = roles[key];
  document.getElementById("modal-title").textContent = role.title;
  document.getElementById("modal-body").textContent = role.body;
  document.getElementById("modal").classList.add("open");
};

window.closeModal = function closeModal() {
  document.getElementById("modal").classList.remove("open");
};

renderContent(roles, "role");
