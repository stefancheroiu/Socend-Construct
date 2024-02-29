function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
}

function addClassIfInView() {
  var aboutTitle = document.getElementById("titluaboutt");
  if (isInViewport(aboutTitle)) {
    aboutTitle.classList.add("in-view");
  } else {
    aboutTitle.classList.remove("in-view");
  }

  var aboutItems = document.querySelectorAll(".about-item");
  aboutItems.forEach(function (item) {
    if (isInViewport(item)) {
      item.classList.add("in-view");
    } else {
      item.classList.remove("in-view");
    }
  });

  var servicesTitle = document.querySelector(".services h5");
  if (isInViewport(servicesTitle)) {
    servicesTitle.classList.add("in-view");
  } else {
    servicesTitle.classList.remove("in-view");
  }

  var serviceItemOne = document.querySelector(".service-item.one");
  if (isInViewport(serviceItemOne)) {
    serviceItemOne.classList.add("in-view-one");
  } else {
    serviceItemOne.classList.remove("in-view-one");
  }

  var serviceItemTwo = document.querySelector(".service-item.two");
  if (isInViewport(serviceItemTwo)) {
    serviceItemTwo.classList.add("in-view-two");
  } else {
    serviceItemTwo.classList.remove("in-view-two");
  }

  var textIndustrial = document.querySelector(".textindustrial");
  if (isInViewport(textIndustrial)) {
    textIndustrial.classList.add("in-view-nine");
  } else {
    textIndustrial.classList.remove("in-view-nine");
  }

  var contactIndustrial = document.querySelector(".contactindustrial");
  var deceIndustrial = document.querySelector(".deceindustrial");
  if (isInViewport(contactIndustrial)) {
    contactIndustrial.classList.add("in-view-ten");
    deceIndustrial.classList.add("in-view-ten");
  } else {
    contactIndustrial.classList.remove("in-view-ten");
    deceIndustrial.classList.remove("in-view-ten");
  }
}

window.addEventListener("scroll", function () {
  addClassIfInView();
});

window.addEventListener("DOMContentLoaded", function () {
  addClassIfInView();
});
