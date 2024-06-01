const applyMenu = document.querySelector('.apply-menu');
const applyMenuDropdown = document.querySelector('.apply-menu-drop-down');
const applyMenuDropdownContent = document.querySelector('.apply-menu-drop-down-content');
applyMenu.addEventListener('click', (e) => {
    e.preventDefault();
    applyMenuDropdown.style.height = applyMenuDropdown.style.height === '200px' ? '0' : '200px';
    applyMenuDropdownContent.style.top = applyMenuDropdownContent.style.top === '-20px' ? '0' : '-20px';
    // applyMenuDropdown.style.boxShadow = applyMenuDropdown.style.height === '215px' ? 'rgba(0, 0, 0, 0.15) 0 2px 8px;' : 'none';
    applyMenuDropdown.style.transition = 'height 300ms ease-in-out';
    applyMenuDropdownContent.style.transition = 'all 300ms ease-in-out';

})