const headerDropdown = () => {
  return {
    isOpen: false,
  };
};

const headerSidebar = () => {
  return {
    isOpen: false,
  };
};

const tab = () => {
  return {
    activeTab: 0,
    handleChangeTab(tab) {
      this.activeTab = tab;
    },
  };
};

const accordion = () => {
  return {
    activeTab: 0,
    handleChangeTab(tab) {
      this.activeTab = tab;
    },
  };
};

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

const siderbarCompanyBtn = document.getElementById("siderbar-company-btn");
const siderbarCompanyMenu = document.getElementById("siderbar-company-menu");

siderbarCompanyBtn.addEventListener("click", () => {
  if (siderbarCompanyMenu.style.gridTemplateRows === "1fr") {
    siderbarCompanyMenu.style.gridTemplateRows = "0fr";
  } else {
    siderbarCompanyMenu.style.gridTemplateRows = "1fr";
  }
});
