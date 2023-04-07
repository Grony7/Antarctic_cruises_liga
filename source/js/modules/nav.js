const menu = document.querySelector('[data-menu="menu"]');
const menuToggle = document.querySelector('[data-menu="button"]');
const body = document.querySelector("body");
const menuOverlay = document.querySelector('[data-menu="overlay"]');
const menuList = menu.querySelector('[data-menu="list"]');
const menuLinks = menuList.querySelectorAll('a');

const openMenu = () => {
  menu.classList.add('is-open');
  body.classList.add('menu-open');
}

const closeMenu = () => {
  menu.classList.remove('is-open');
  body.classList.remove('menu-open');
}

export const menuStatus = () => {
  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () =>{
      if (menu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuLinks && menu) {
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) {
          closeMenu();
        }
      });
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      closeMenu();
    });
  }
};


