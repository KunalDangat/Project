let shop = document.getElementById("product1");

let generateShop = () => {
  return (product1.innerHTML = shopItemsData.map((x) => {
    return `
    <div class="pro-container">
      <div class="pro" onclick="window.location.href='sproduct.html';">
        <img src="img/nike 1.webp" alt="">
        <div class="des">
            <span>Nike Dri-FIT</span>
            <h5>Men's Short-Sleeve Basketball Top</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>MRP : ₹3895.00</h4>
        </div>
        </div>
    </div>
    `;
  }).join(""));
};

generateShop();
