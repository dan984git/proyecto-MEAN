document.addEventListener('click', (event) => {
    if (event.target && event.target.className.includes('AddToCart')) {
        addToCartClicked(event);
    }
});

//const comprarButton = document.querySelector('.comprarButton');
//comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingcarritoItemsContainer = document.querySelector(
    '.carritoSidebar'
);

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemCodigo = item.querySelector('.itemCodigo').textContent;
    const itemNombre = item.querySelector('.itemNombre').textContent;
    const itemPrecio = item.querySelector('.itemPrecio').textContent;
    const itemCantidad = item.querySelector('.itemCantidad').value;
    const itemId = item.querySelector('.itemId').textContent;

    addItemToShoppingCart(itemCodigo, itemNombre, itemPrecio, itemCantidad, itemId);
}

function addItemToShoppingCart(itemCodigo, itemNombre, itemPrecio, itemCantidad, itemId) {
    /*const elementsID = document.querySelector('.shoppingCartItem');
    
    if (elementsID.innerText === itemCodigo) {
        let elementQuantity = elementsID.querySelector(
            '.shoppingCartItemQuantity'
        );
        itemCantidad = elementQuantity + itemCantidad;
        updateShoppingCartTotal();
        return;
    }*/

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="shoppingCartItem row d-flex align-items-center p-0 m-0 w-100" id='${itemId}'>
        <div class="col-lg-2 col-sm-2 col-s-2 col-2 ">
            <div class="buttonDelete btn btn-dark" >
            X
            </div>
        </div>
        <div class="col-lg-5 col-sm-5 col-s-6 col-5 shoppingCartItemNombre">${itemNombre} (Código: ${itemCodigo})</div>    
        <div class="col-lg-4 col-sm-4 col-s-3 col-4 px-0">
            <div class="row d-flex align-items-center px-5 mt-3 shoppingCartItemPrice">        
                ${itemPrecio} USD
            </div>
            <div class="itemCartNombre active">${itemCodigo}</div>
                <div class="input-group mb-3 px-3" style="max-width: 120px;">
                    <input class="form-control text-center itemCantidad shoppingCartItemQuantity" id="qty_carrito" type="number" value='${itemCantidad}' min="1"/>
                </div>
            </div>
    </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingcarritoItemsContainer.append(shoppingCartRow);
    updateShoppingCartTotal();
    guardarLocalStorage();

    shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);
    updateShoppingCartTotal()

    shoppingCartRow
        .querySelector('.carritoSidebar')
        .addEventListener('change', quantityChanged);
    updateShoppingCartTotal()
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('USD', '')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
        );
        const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)} USD`;
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    guardarLocalStorage()
    updateShoppingCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    guardarLocalStorage()
    updateShoppingCartTotal();
}

function guardarLocalStorage() {
    const shoppingCartItems = getItemsInShoppingCart();
    addToLocalStorage('shoppingCart', shoppingCartItems);

    updateShoppingCartTotal();
}


function getItemsInShoppingCart() {
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    const arrShoppingCartItems = [];

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
        );
        const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
        );
        //const itemId = shoppingCartItem.dataset.id;
        const itemNom = shoppingCartItem.querySelector(
            '.shoppingCartItemNombre'
        );
        const itemNombre = String(
            itemNom.textContent
        );

        const item = {
            Nombre: itemNombre,
            qty: shoppingCartItemQuantity,
        };

        arrShoppingCartItems.push(item);
    });
    return arrShoppingCartItems;
}

function addToLocalStorage(key, items) {
    localStorage.setItem(key, JSON.stringify(items));
}
