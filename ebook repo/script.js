document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});