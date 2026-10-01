document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest('.btn-menu, .btn-menu-close')) {
        document.querySelector('.smart-overlay-menu')?.classList.toggle('on');
        return;
    }

    const depth2MenuButton = target.closest('.gnb-smart a');
    if (!depth2MenuButton) return;

    event.preventDefault();

    const depth2MenuButtons = [...document.querySelectorAll('.gnb-smart a')];
    const menuIndex = depth2MenuButtons.indexOf(depth2MenuButton);
    if (menuIndex <= 0) return;

    const depth2Menus = document.querySelectorAll('.gnb2depth-smart');
    const depth2Menu = depth2Menus[menuIndex - 1];
    if (!depth2Menu) return;

    depth2MenuButtons.forEach((button) => button.parentElement.classList.remove('on'));
    depth2MenuButton.parentElement.classList.add('on');
    depth2Menus.forEach((menu) => menu.classList.remove('on'));
    depth2Menu.classList.add('on');
});