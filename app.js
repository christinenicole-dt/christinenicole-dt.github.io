document.addEventListener("DOMContentLoaded", function () {
  let sliderContainers = document.querySelectorAll(".slider-container");

  sliderContainers.forEach((container) => {
      let list = container.querySelector(".list");
      let items = container.querySelectorAll(".item");
      let dots = container.querySelectorAll(".dots li");
      let prev = container.querySelector(".prev");
      let next = container.querySelector(".next");

      let active = 0;
      let lengthItems = items.length - 1;

      next.addEventListener("click", function () {
          if (active + 1 > lengthItems) {
              active = 0;
          } else {
              active++;
          }
          reloadSlider();
      });

      prev.addEventListener("click", function () {
          if (active - 1 < 0) {
              active = lengthItems;
          } else {
              active--;
          }
          reloadSlider();
      });

      function reloadSlider() {
          let checkLeft = items[active].offsetLeft;
          list.style.left = -checkLeft + "px";

          let lastActiveDot = container.querySelector(".dots .active");
          lastActiveDot.classList.remove("active");
          dots[active].classList.add("active");
      }

      dots.forEach((dot, key) => {
          dot.addEventListener("click", function () {
              active = key;
              reloadSlider();
          });
      });
  });
});
