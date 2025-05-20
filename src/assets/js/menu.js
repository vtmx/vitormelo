class Menu {
  toggleMenu(currentTarget) {
    this.removeActiveMenu('.menu a.active');
    this.addActiveMenu(currentTarget);

    const page = document.getElementById(currentTarget.dataset.page);
    this.removeActivePage();
    this.addActivePage(page);
  }

  removeActiveMenu() {
    let oldMenuActive = document.querySelectorAll('.menu a.active')[0];
    if (oldMenuActive) {
      oldMenuActive.classList.remove('active');
    }
  }

  addActiveMenu(currentTarget) {
    currentTarget.classList.add('active');
  }
}

const menu = new Menu();
