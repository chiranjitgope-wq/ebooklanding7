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

let time = 30 * 60;

setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const timer = document.getElementById("timer");

  if (timer) {
    timer.innerHTML =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  if (time > 0) {
    time--;
  }
}, 1000);
