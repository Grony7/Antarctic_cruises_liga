const menu = document.querySelector('[data-menu="menu"]');
const menuToggle = document.querySelector('[data-menu="button"]');


export const menuStatus = () => {
  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () =>{
      menu.classList.toggle('is-open')
    })
  }
}
