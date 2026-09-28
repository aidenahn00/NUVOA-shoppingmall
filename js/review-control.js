const reviewContent = document.querySelector('.review');
let template = '';

if (reviewInfo.length === 0) {
    // 리뷰가 없는 경우
    const productdetail2 = document.querySelector('#product-detail-2');
    productdetail2.innerHTML = `<h2>상품 리뷰</h2><div class="no-review">상품에 대한 리뷰가 없습니다.</div>`;
} else {
    // 리뷰가 있는 경우
    reviewInfo.forEach(item => {

        let imgList = '';
        item.reviewImgs.forEach(img => {
            imgList += `<li><img src="./img/review/${img}" alt="리뷰이미지 ${img}"></li>`;
        });

        template += `
                        <li>
                            <div class="review-user">
                                <span class="rev-name">${item.userName[0] + '*' + item.userName[2]}</span>
                                <span class="rev-date">${item.date}</span>
                            </div>
                            <div class="review-content">
                                <div class="stars">
                                    ${`<img src="./img/icn-star.svg" alt="좋아요 별">`.repeat(item.rating)}
                                </div>
                                <div class="review-txt fold">
                                    <p>${item.reviewTxt}</p>
                                    <button class="btn-rvtxt">더보기<img src="./img/icn-more.svg" alt="더보기"></button>
                                </div>
                                <div class="review-img">
                                    <ul class="review-gallery">
                                    ${imgList}
                                    </ul>
                                </div>
                                <div class="review-etc">
                                    <a href="#"><img src="./img/icn-rev-good.svg" alt="유용해요">유용해요</a>
                                    <a href="#"><img src="./img/icn-rev-siren.svg" alt="신고 차단">신고 차단</a>
                                </div>
                            </div>
                        </li>
`;
    });
    reviewContent.innerHTML = template;
}