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
    const cartProductCount = document.querySelector('.cart__product-count');

    if (cartProduct.dataset.id === product.dataset.id) {
        cartProductCount.textContent = productQuantity;
    } else {
        cartProducts.insertAdjacentHTML('afterbegin',
            `<div class="cart__product" data-id>
            <img class="cart__product-image">
            <div class="cart__product-count"></div>
            </div>`);
    }
    const cartProduct = document.querySelector('.cart__product');
}))

