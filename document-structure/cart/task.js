const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const productAdd = document.querySelectorAll('.product__add');

inc.forEach(item => item.addEventListener('click', function () {
    const container = item.closest('.product__quantity-controls')
    const value = container.querySelector('.product__quantity-value');
    let currentValue = parseInt(value.textContent);
    value.textContent = currentValue + 1;
}))

dec.forEach(item => item.addEventListener('click', function () {
    const container = item.closest('.product__quantity-controls')
    const value = container.querySelector('.product__quantity-value');
    let currentValue = parseInt(value.textContent);
    if (currentValue > 1) {
        value.textContent = currentValue - 1;
    }
}))

productAdd.forEach(element => element.addEventListener('click', event => {
    event.preventDefault();

    const product = document.querySelector('.product');
    const productImage = document.querySelector('.product__image');
    const productId = product.dataset.id;
    const quantity = document.querySelector('.product__quantity-value');
    const productQuantity = parseInt(quantity.textContent);

    const cartProducts = document.querySelector('.cart__products');
    const cartProductsArray = Array.from(cartProducts);

    const cartProductCount = document.querySelector('.cart__product-count');

    const productInCard = cartProductsArray.find(element => element.dataset.id === productId);

    if (productInCard) {
        cartProductCount.textContent = productQuantity;
    } else {
        cartProducts.insertAdjacentHTML('afterbegin',
            `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImage.src}">
            <div class="cart__product-count">${productQuantity}</div>
            </div>`);
    }
}))