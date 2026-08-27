const menuButton = document.querySelector('.btn-menu');
const menuCloseButton = document.querySelector('.btn-menu-close');
const smartOverLayMenu = document.querySelector('.smart-overlay-menu');
const depth2MenusButtons = document.querySelectorAll('.gnb-smart a');
const depth2Menus = document.querySelectorAll('.gnb2depth-smart');

// 스마트 디바이스 메뉴 열기 닫기 기능
if (menuButton) {
    menuButton.addEventListener('click', () => {
        smartOverLayMenu.classList.toggle('on');
    });
}
if (menuCloseButton) {
    menuCloseButton.addEventListener('click', () => {
        smartOverLayMenu.classList.toggle('on');
    });
}

// 버튼에 따른 개별 메뉴 보이기
depth2MenusButtons.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        // if (idx === 0) return;
        e.preventDefault();
        depth2MenusButtons.forEach(el => el.parentElement.classList.remove('on'));
        el.parentElement.classList.add('on');
        depth2Menus.forEach((el, idx) => {
            el.classList.remove('on');
        });
        depth2Menus[idx - 1].classList.add('on');
    });
});
