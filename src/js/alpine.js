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
