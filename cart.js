let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({product, price});
    total += price;
    renderCart();
}

function renderCart() {
    let list = document.getElementById('cart-items');
    list.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.product + ' - ' + item.price.toLocaleString() + 'đ';
        list.appendChild(li);
    });
    document.getElementById('total').textContent = 'Tổng: ' + total.toLocaleString() + 'đ';
}

function checkout() {
    if(cart.length === 0) {
        alert('Giỏ hàng trống!');
    } else {
        alert('Cảm ơn bạn đã đặt hàng tại Gà Chà Bá!');
        cart = [];
        total = 0;
        renderCart();
    }
}
