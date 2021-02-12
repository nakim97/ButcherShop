
// Add item to  Order
var addBtn = document.getElementsByClassName('fas fa-plus-circle')
    for (var i = 0; i < addBtn.length; i++) {
        var button = addBtn[i]
        button.addEventListener('click', addMeat)
    }

    function addMeat(event) {
        var button = event.target
        var shopItem = button.parentElement
        var title = shopItem.getElementsByClassName('meat-name')[0].innerText
        var price = shopItem.getElementsByClassName('meat-price')[0].innerText
        addToOrder(title, price)
        updateOrder()
    }
    
    function addToOrder(title, price) {
        var orderData = document.createElement('div')
        orderData.classList.add('order')
        var meatClass = document.getElementsByClassName('order-item')[0]
        var meatName = meatClass.getElementsByClassName('order-item-title')
        for (var i = 0; i < meatName.length; i++) {
            if (meatName[i].innerText == title) {
                alert("The Meat is already in the Cart")
                return
            }
        }
        var meatData = `
        <div class="order-item">
            <span class="order-item-title">${title}</span>
            <input class="order-quantity" type="number" value="1" style="width: 40px">
            <span class="order-price">${price}</span>
            <i class="fas fa-times" ></i>
            <hr>
       
        </div>`
 
        orderData.innerHTML = meatData
        meatClass.append(orderData)
        orderData.getElementsByClassName('fas fa-times')[0].addEventListener('click', removeMeat)
        orderData.getElementsByClassName('order-quantity')[0].addEventListener('change', quantityChanged)
    }

// Remove Item from Cart Order
var removeBtn = document.getElementsByClassName('fas fa-times')
for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i]
    button.addEventListener('click', removeMeat)
}
function removeMeat(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateOrder()
}

//Quantity

var orderQuantity = document.getElementsByClassName('order-quantity')
for (var i = 0; i < orderQuantity.length; i++) {
    var input = orderQuantity[i]
    input.addEventListener('change', quantityChanged)
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateOrder()
}



// Update Total Price 
function updateOrder() {
    var totalDiv = document.getElementsByClassName('order')[0]
    var totalOrderDiv = totalDiv.getElementsByClassName('order')
    var total = 0
    for (var i = 0; i < totalOrderDiv.length; i++) {
        var meatTotal = totalOrderDiv[i]
        var meatPrice = meatTotal.getElementsByClassName('order-price')[0]
        var meatQuantity = meatTotal.getElementsByClassName('order-quantity')[0]
        var price = parseFloat(meatPrice.innerText.replace('$', ''))
        var quantity = meatQuantity.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

// Order Button and Successfully Purchased Message
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('order-item')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateOrder()
}
document.getElementsByClassName('order-btn')[0].addEventListener('click', purchaseClicked)
