let itemName;
let itemQty;
let x;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        itemName = this.parentElement.parentElement.getElementsByClassName('itemName')[0].textContent;
        itemQty = this.parentElement.querySelector('input').value;
        itemCost = this.parentElement.parentElement.getElementsByClassName('itemCost')[0].textContent;
        console.log(itemName);
        console.log(itemCost);

        x = document.getElementById('cartItems').children.length;
        for (let i=0; i<x; i++) {
            if (document.getElementById('cartItems').children[i].textContent.includes(itemName)) {
                alert('Item already exists in your cart');
                break;
            }
        }
            if (itemQty > 0) {
                const cartItem = document.createElement('div');
                const cartItemDescription = document.createElement('div');
                const cartItemQty = document.createElement('div');
                const cartItemCost = document.createElement('div');
                cartItem.className = 'cartItem';
                cartItemDescription.innerHTML = itemName;
                cartItemDescription.className = 'flexDiv';
                cartItemQty.innerHTML = itemQty;
                cartItemQty.className = 'flexDiv';
                cartItemCost.innerHTML = itemCost;
                cartItemCost.className = 'flexDiv';
                const cartItems = document.getElementById('cartItems').appendChild(cartItem);
                cartItems.appendChild(cartItemDescription);
                cartItems.appendChild(cartItemQty);
                cartItems.appendChild(cartItemCost);
                
            } else {
                alert('Please increase the quantity');
            }

    })
})
