document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");
  const header = document.querySelector(".home");
  const headerHeight = header.offsetHeight;
  let isNavbarTransparent = true;

  function updateNavbarBackground() {
    const scrollY = window.scrollY;
    const shouldNavbarBeTransparent = scrollY < headerHeight;

    if (shouldNavbarBeTransparent !== isNavbarTransparent) {
      isNavbarTransparent = shouldNavbarBeTransparent;
      requestAnimationFrame(() => {
        navbar.style.transition = "background-color 0.3s ease"; 
        navbar.style.backgroundColor = isNavbarTransparent
          ? "transparent"
          : "#131416"; 
      });
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  const debouncedUpdateNavbarBackground = debounce(updateNavbarBackground, 10);
  window.addEventListener("scroll", debouncedUpdateNavbarBackground);

});
  
  
//Function to make Navbar Responsive
function toggleMenu() {

  console.log("clicked")
  var navMenu = document.querySelector(".nav-menu");

  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenu.style.transform = "translateY(-200px)";
  } else {
    navMenu.classList.add("active");
    navMenu.style.transform = "translateY(0)";
  }
}


// Create an Intersection Observer

function animateOnScroll(elements) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn');
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((item) => {
    observer.observe(item);
  });
}

const featureSections = document.querySelectorAll('.feature');
const dealingSections = document.querySelectorAll('.dealing-section');
const registerSections = document.querySelectorAll('.registration-section');
const contactSections = document.querySelectorAll('.contact-section');
animateOnScroll(featureSections);
animateOnScroll(dealingSections);
animateOnScroll(registerSections);
animateOnScroll(contactSections);

