
function toggleSubmenu(menuItem) {
  const submenu = menuItem.querySelector('.submenu');
  const arrow = menuItem.querySelector('.arrow');

  // Toggle active class
  submenu.classList.toggle('active');
  menuItem.classList.toggle('open');

  // Close other submenus
  document.querySelectorAll('.menu-item').forEach(item => {
    if (item !== menuItem) {
      item.classList.remove('open');
      item.querySelector('.submenu').classList.remove('active');
    }
  });
}