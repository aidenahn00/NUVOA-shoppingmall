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

let previousScrollY = window.scrollY;
let lastScrollDirection = null;
let isHeaderHovered = false;

document.addEventListener('mouseover', (event) => {
    if (!(event.target instanceof Element)) return;

    const header = event.target.closest('header');
    if (!header || (event.relatedTarget instanceof Node && header.contains(event.relatedTarget))) return;

    isHeaderHovered = true;
    header.classList.remove('on');
});

document.addEventListener('mouseout', (event) => {
    if (!(event.target instanceof Element)) return;

    const header = event.target.closest('header');
    if (!header || (event.relatedTarget instanceof Node && header.contains(event.relatedTarget))) return;

    isHeaderHovered = false;
    if (window.scrollY > 0 && lastScrollDirection === 'down') {
        header.classList.add('on');
    }
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScrollY = window.scrollY;

    if (currentScrollY < previousScrollY) {
        lastScrollDirection = 'up';
    } else if (currentScrollY > previousScrollY) {
        lastScrollDirection = 'down';
    }

    if (header && !isHeaderHovered && (currentScrollY <= 0 || currentScrollY < previousScrollY)) {
        header.classList.remove('on');
    } else if (header && !isHeaderHovered && currentScrollY > previousScrollY) {
        header.classList.add('on');
    }

    previousScrollY = currentScrollY;
}, { passive: true });