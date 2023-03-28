const menu = document.querySelector('[data-menu="menu"]');
const menuToggle = document.querySelector('[data-menu="button"]');
const menuList = menu.querySelector('[data-menu="list"]');
const menuLinks = menuList.querySelectorAll('a')



export const menuStatus = () => {
  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () =>{
      menu.classList.toggle('is-open')
    })
  }

  if (menuLinks && menu) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if(menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        }
      });
    });
  }
}


