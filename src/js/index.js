//手機版sideBar
const sidebarBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("siderbar--active");
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("siderbar--active");
});

const siderbarCompanyBtn = document.getElementById("siderbar-company-btn");
const siderbarCompanyMenu = document.getElementById("siderbar-company-menu");

siderbarCompanyBtn.addEventListener("click", () => {
  if (siderbarCompanyMenu.style.gridTemplateRows === "1fr") {
    siderbarCompanyMenu.style.gridTemplateRows = "0fr";
  } else {
    siderbarCompanyMenu.style.gridTemplateRows = "1fr";
  }
});

//電腦版header
const desktopCompanyBtn = document.getElementById("desktop-company-btn");
const desktopCompanyMenu = document.getElementById("desktop-company-menu");

desktopCompanyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  desktopCompanyMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (
    desktopCompanyMenu.contains(e.target) ||
    desktopCompanyBtn.contains(e.target)
  ) {
    return;
  }
  desktopCompanyMenu.classList.add("hidden");
});

//輪播
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//Tab
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //移除所有tab-button的active
    tabButtons.forEach((button) => {
      button.classList.remove("!text-gray-800");
      button.nextElementSibling.classList.remove("!w-full");
    });

    //隱藏所有tab-content
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    //將點擊的tab-button加上active
    button.classList.add("!text-gray-800");
    button.nextElementSibling.classList.add("!w-full");

    //選取對應的tab-content
    const tab = button.getAttribute("data-tab");
    document.getElementById(tab).classList.remove("hidden");
  });
});

//accordion
const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //移除所有accordion-button的active
    accordionButtons.forEach((button) => {
      button.classList.remove("bg-gray-100", "!text-gray-800");
    });

    accordionContents.forEach((content) => {
      content.style.gridTemplateRows = "0fr";
    });

    button.classList.add("!text-gray-800", "bg-gray-100");

    const content = button.getAttribute("data-accordion");

    document.getElementById(content).style.gridTemplateRows = "1fr";
  });
});
