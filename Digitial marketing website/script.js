const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggleButton.addEventListener("click", () =&gt; {
  navLinks.classList.toggle("active");
});

// services box
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) =&gt; {
  boxBtn.addEventListener("click", () =&gt; {
    box(i);
  });
});

boxCloses.forEach((boxClose) =&gt; {
  boxClose.addEventListener("click", () =&gt; {
    boxViews.forEach((boxView) =&gt; {
      boxView.classList.remove("active-box");
    });
  });
});

// change bg header
function scrollHeader() {
  const nav = document.getElementById("home");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY &gt;= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// scroll to top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY &gt;= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
