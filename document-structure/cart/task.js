const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const value = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
let valueStatus = 0;

inc.forEach(item => item.addEventListener('click', function () {
    valueStatus++
    value.textContent = valueStatus;
}))

dec.forEach(item => item.addEventListener('click', function () {
    valueStatus--
    value.textContent = valueStatus;
}))

productAdd.forEach(element => element.addEventListener('click', function () {

}))

