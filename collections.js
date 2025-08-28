// Open Sidebar based on the section (Wishlist, Cart, Account)
function openSidebar(type) {
    document.getElementById("sidebar").style.width = "300px"; // Set width to show the sidebar
    const wishlistContent = document.getElementById('wishlist-content');
    const cartContent = document.getElementById('cart-content');

    if (type === "wishlist") {
        wishlistContent.innerHTML = "<h2><b>Wishlist</b></h2>" + generateList('wishlist');
        wishlistContent.style.display = 'block';
        cartContent.style.display = 'none';
    } else if (type === "cart") {
        cartContent.innerHTML = "<h2><b>Cart</b></h2>" + generateList('cart');
        cartContent.style.display = 'block';
        wishlistContent.style.display = 'none';
    }
}

// Close the sidebar
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Simulate items being added to wishlist/cart
const cartItems = [];
const wishlistItems = [];

// Add item to cart or wishlist
function addItem(button, section) {
    const product = button.parentElement.querySelector('h3').textContent;

    if (section === 'cart') {
        cartItems.push(product);
        document.getElementById('cart-content').innerHTML = "<h2><b>Cart</b></h2>" + generateList('cart');
    } else if (section === 'wishlist') {
        wishlistItems.push(product);
        document.getElementById('wishlist-content').innerHTML = "<h2><b>Wishlist</b></h2>" + generateList('wishlist');
    }

    alert(product + " added to " + section);
}

// Remove item from cart or wishlist
function removeItem(button) {
    const productElement = button.parentElement;
    const productName = productElement.querySelector('h3').textContent;

    // Determine the section: cart or wishlist
    const isCart = productElement.closest('#cart-content') !== null;
    const section = isCart ? cartItems : wishlistItems;

    // Find and remove the item from the array
    const index = section.indexOf(productName);
    if (index !== -1) {
        section.splice(index, 1); // Remove the item from the array
    }

    // Remove the item from the DOM
    productElement.remove();

    alert(productName + " removed from " + (isCart ? 'cart' : 'wishlist'));
}

// Update quantity of products
function changeQuantity(button, delta) {
    const quantitySpan = button.parentElement.querySelector('.Quantity span');
    let quantity = parseInt(quantitySpan.textContent);
    quantity += delta;
    if (quantity < 1) {
        quantity = 1;
    }
    quantitySpan.textContent = quantity;
}

// Generate HTML for the list of items in cart or wishlist
function generateList(type) {
    const items = type === 'cart' ? cartItems : wishlistItems;
    if (items.length === 0) {
        return "<p>No items in your " + type + ".</p>";
    } else {
        let list = `<div class="${type}">`;
        list += "<ul>";
        items.forEach(item => {
            list += `<li>
                <h3>${item}</h3>
                <button class="remove" onclick="removeItem(this)"><i class="fas fa-trash"></i> remove</button>
                <br><span class="Quantity">Quantity: <span>1</span></span>
                <button class="add" onclick="changeQuantity(this, 1)">+</button>
                <button class="sub" onclick="changeQuantity(this, -1)">-</button>
            </li>`;
        });
        list += "</ul></div>";
        return list;
    }
}
function toggleLike(icon) {
    icon.classList.toggle('liked');
}
function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    switch (query) {
    case 'ring':
        case 'rings':
    case 'Rings':
        case 'Ring':
    case 'RINGS':
    case 'RING':
            window.location.href = 'http://127.0.0.1:5500/ring.html';
            break;
        case 'bracelet':
            case 'bracelets':
            case 'Bracelets':
                case 'Bracelet':
                case 'BRACELET':
                    case 'BRACELETS':
            window.location.href = 'http://127.0.0.1:5500/bracelets.html';
            break;
        case 'necklace':
            case 'necklaces':
                case 'Necklace':
                    case 'Necklaces':
                    case 'NECKLACES':
                        case 'NECKLACE':
            window.location.href = 'http://127.0.0.1:5500/necklaces.html';
            break;
        case 'chain':
            case 'chains':
                case 'Chains':  
                case 'Chain':  
                case 'CHAIN': 
                case 'CHAINS':    
            window.location.href = 'http://127.0.0.1:5500/necklaces.html';
            break;
        case 'earring':
            case 'earrings':
                case 'Earring':
                    case 'Earrings':
                        case 'EARRINGS':
                            case 'EARRING':

            window.location.href = 'http://127.0.0.1:5500/earrings.html';
            break;
        default:
            alert('No results found for "' + query + '". Please try again!');
            break;
    }
}



