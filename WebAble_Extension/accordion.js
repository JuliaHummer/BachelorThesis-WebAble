document.addEventListener("DOMContentLoaded", function () {
  const accItems = document.getElementsByClassName("accordion");
  let last = null;

  for (let i = 0; i < accItems.length; i++) {
    accItems[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      // Same element gets closed again after clicking on it
      if (last === this) {
        this.classList.remove("active");
        panel.style.maxHeight = null;
        last = null;
        return;
      }

      // Another element gets opened, close the last one
      if (last) {
        last.classList.remove("active");
        last.nextElementSibling.style.maxHeight = null;
      }

      // Open the clicked element
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      last = this;
    });
  }
});