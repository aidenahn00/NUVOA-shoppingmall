function getParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

// 사용 예시:
// const type = getParam('type');
// console.log(type);
