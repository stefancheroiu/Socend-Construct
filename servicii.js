function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
}

function addClassIfInView() {
  var titleServices = document.querySelector(".services-title.bg-gradient");
  if (isInViewport(titleServices)) {
    titleServices.classList.add("in-view-eight");
  } else {
    titleServices.classList.remove("in-view-eight");
  }
  var serviceItemOne = document.querySelector(".service-item1.construction");
  if (isInViewport(serviceItemOne)) {
    serviceItemOne.classList.add("in-view-three");
  } else {
    serviceItemOne.classList.remove("in-view-three");
  }
  var serviceItemTwo = document.querySelector(".service-item1.telecom");
  if (isInViewport(serviceItemTwo)) {
    serviceItemTwo.classList.add("in-view-four");
  } else {
    serviceItemTwo.classList.remove("in-view-four");
  }
  var serviceItemThree = document.querySelector(".service-item1.design");
  if (isInViewport(serviceItemThree)) {
    serviceItemThree.classList.add("in-view-five");
  } else {
    serviceItemThree.classList.remove("in-view-five");
  }
  var serviceItemFour = document.querySelector(".service-item1.consultancy");
  if (isInViewport(serviceItemFour)) {
    serviceItemFour.classList.add("in-view-six");
  } else {
    serviceItemFour.classList.remove("in-view-six");
  }
  var moreServices = document.querySelector(".more-services");
  if (isInViewport(moreServices)) {
    moreServices.classList.add("in-view-seven");
  } else {
    moreServices.classList.remove("in-view-seven");
  }
}

window.addEventListener("scroll", function () {
  addClassIfInView();
});

window.addEventListener("DOMContentLoaded", function () {
  addClassIfInView();
});
