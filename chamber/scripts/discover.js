const date = new Date();

const lastVisit = Math.round((date.getTime() - (new Date(localStorage.getItem("lastVisitLocal")).getTime())) / (1000 * 60 * 60 * 24));
if (localStorage.getItem("lastVisitLocal") === null) {
    document.querySelector("#lastVisit").textContent = "First visit";
}
else if (lastVisit === 0) {
    document.querySelector("#lastVisit").textContent = "Last visit: today";
}
else if (lastVisit === 1) {
    document.querySelector("#lastVisit").textContent = "Last visit: yesterday";
}
else {
    document.querySelector("#lastVisit").textContent = `Last visit: ${lastVisit} days ago`;
};
localStorage.setItem("lastVisitLocal", date);

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}