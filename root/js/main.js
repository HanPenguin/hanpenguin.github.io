body {
  font-family: sans-serif;
  margin: 20px;
}

.article-list li {
  margin: 8px 0;
}

.swiper {
  width: 100%;
  max-width: 900px;
  margin: auto;
}

.swiper-slide {
  position: relative;
}

img {
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
["copy", "cut", "paste"].forEach(e =>
  document.addEventListener(e, ev => ev.preventDefault())
);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.body.style.filter = "blur(8px)";
  } else {
    document.body.style.filter = "";
  }
});
const wmText = `© Suzume / ${new Date().toLocaleDateString()}`;
wm.textContent = wmText;
