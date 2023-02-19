function onWindowScroll() {
  if (document.documentElement.scrollTop > 70) {
    document.getElementById("background-header-scroll").style.display = "block";
    document.getElementById("background-header").style.display = "none";
  } else {
    document.getElementById("background-header-scroll").style.display = "none";
    document.getElementById("background-header").style.display = "block";
  }
}

window.addEventListener("scroll", () => onWindowScroll())
