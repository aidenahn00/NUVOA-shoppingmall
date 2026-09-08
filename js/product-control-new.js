const saleWrap = document.querySelector('.new-product');

function formatNumber(num) {
    return Number(num).toLocaleString('ko-KR');
}




let result = newProductArray.map(product => `
                    <li>
                        <a href="#">
                            <figure>
                                <img src="./img/${product.pthumbFileName}" alt="${product.pname}">
                            </figure>
                            <div class="sale-txt">
                                <h4 class="title-1">${product.pname}</h4>
                                <p class="desc-1">${product.pdesc}</p>
                                <div class="pay-frame">
                                    ${product.pdiscount ? `<div class="pay-original"><span>${formatNumber(product.price)}</span>원</div>
                                        <div class="pay-discount">
                                            <div class="discount">${Math.round(product.pdiscount*100)}%</div>
                                            <div class="pay"><b>${formatNumber(Math.round(product.price-(product.price*product.pdiscount)))}</b>원</div>
                                        </div>` : `<div class="pay"><b>${formatNumber(product.price)}</b>원</div>`
                                    }
                                </div>
                            </div>
                        </a>
                    </li> 
    `).join('');

document.querySelector('.new-product').innerHTML = result;