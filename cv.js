const showOnPx = 270;
const volverAlInicioButton = document.querySelector(".volverAlInicio")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    volverAlInicioButton.classList.remove("hidden")
  } else {
    volverAlInicioButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };

volverAlInicioButton.addEventListener("click", goToTop)

