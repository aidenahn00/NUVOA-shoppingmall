const saleWrap = document.querySelector('.sale');

function formatNumber(num) {
    return Number(num).toLocaleString('ko-KR');
}

let result = product.map(product => `
                    <li>
                        <a href="#">
                            <figure>
                                <img src="./img/${product.pthumbFileName}" alt="${product.pname}">
                            </figure>
                            <div class="sale-txt">
                                <h4 class="title-1">${product.pname}</h4>
                                <p class="desc-1">${product.pdesc}</p>
                                <div class="pay-frame">
                                    <div class="pay-original"><span>${formatNumber(product.price)}</span>원</div>
                                    <div class="pay-discount">
                                        <div class="discount">${Math.round(product.pdiscount*100)}%</div>
                                        <div class="pay"><b>${formatNumber(product.priceDiscount)}</b>원</div>
                                    </div>
                                </div>
                                <span class="like-badge noab">
                                    <img src="./img/icn-heart-line.svg" alt="좋아요">
                                    <span>${product.plikes}</span>
                                </span>
                            </div>
                        </a>
                    </li>    
    `).join('');

document.querySelector('.sale').innerHTML = result;