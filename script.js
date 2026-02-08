// Mock Data for Dropshipping Products
const products = [
    {
        id: 1,
        name: "Smart Watch Ultra",
        price: 49.99,
        image: "7 (1).jpg"
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 29.99,
        image: "7 (2).jpg"
    },
    {
        id: 3,
        name: "Portable Blender",
        price: 34.50,
        image: "7 (3).jpg"
    },
    {
        id: 4,
        name: "LED Gaming Lights",
        price: 15.00,
        image: "7 (4).jpg"
    },
    {
        id: 5,
        name: "Product 5",
        price: 20.00,
        image: "7 (5).jpg"
    },
    {
        id: 6,
        name: "Product 6",
        price: 25.00,
        image: "7 (6).jpg"
    },
    {
        id: 7,
        name: "Product 7",
        price: 30.00,
        image: "7 (7).jpg"
    },
    {
        id: 8,
        name: "Product 8",
        price: 35.00,
        image: "7 (8).jpg"
    },
    {
        id: 9,
        name: "Product 9",
        price: 40.00,
        image: "7 (9).jpg"
    },
    {
        id: 10,
        name: "Product 10",
        price: 45.00,
        image: "7 (10).jpg"
    },
    {
        id: 11,
        name: "Product 11",
        price: 50.00,
        image: "1 (1).jpg"
    },
    {
        id: 12,
        name: "Product 12",
        price: 55.00,
        image: "1 (2).jpg"
    },
    {
        id: 13,
        name: "Product 13",
        price: 60.00,
        image: "1 (3).jpg"
    },
    {
        id: 14,
        name: "Product 14",
        price: 65.00,
        image: "1 (4).jpg"
    },
    {
        id: 15,
        name: "Product 15",
        price: 70.00,
        image: "1 (5).jpg"
    },
    {
        id: 16,
        name: "Product 16",
        price: 75.00,
        image: "1 (6).jpg"
    },
    {
        id: 17,
        name: "Product 17",
        price: 80.00,
        image: "1 (7).jpg"
    },
    {
        id: 18,
        name: "Product 18",
        price: 85.00,
        image: "1 (8).jpg"
    },
    {
        id: 19,
        name: "Product 19",
        price: 90.00,
        image: "1 (9).jpg"
    },
    {
        id: 20,
        name: "Product 20",
        price: 95.00,
        image: "1 (10).jpg"
    },
    {
        id: 21,
        name: "Product 21",
        price: 100.00,
        image: "1 (11).jpg"
    },
    {
        id: 22,
        name: "Product 22",
        price: 105.00,
        image: "https://placehold.co/400x300?text=Product+22"
    },
    {
        id: 23,
        name: "Product 23",
        price: 110.00,
        image: "https://placehold.co/400x300?text=Product+23"
    },
    {
        id: 24,
        name: "Product 24",
        price: 115.00,
        image: "https://placehold.co/400x300?text=Product+24"
    },
    {
        id: 25,
        name: "Product 25",
        price: 120.00,
        image: "https://placehold.co/400x300?text=Product+25"
    },
    {
        id: 26,
        name: "Product 26",
        price: 125.00,
        image: "https://placehold.co/400x300?text=Product+26"
    },
    {
        id: 27,
        name: "Product 27",
        price: 130.00,
        image: "https://placehold.co/400x300?text=Product+27"
    }
];

let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // If we are on the checkout page, render the items
    if (document.getElementById('checkout-cart-items')) {
        renderCheckoutCart();
    }
});

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

function toggleCart() {
    window.location.href = 'checkout.html';
}

function renderCheckoutCart() {
    const container = document.getElementById('checkout-cart-items');
    const totalEl = document.getElementById('checkout-total');
    const hiddenInput = document.getElementById('order-details-input');
    
    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'checkout-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="checkout-img">
            <div class="item-info">
                <strong>${item.name}</strong>
                <span>$${item.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
        `;
        container.appendChild(div);
    });

    totalEl.innerText = total.toFixed(2);
    
    // Fill hidden input for email
    if (hiddenInput) {
        const itemsList = cart.map(i => `${i.name} ($${i.price})`).join(', ');
        hiddenInput.value = `TOTAL: $${total.toFixed(2)} \nITEMS: ${itemsList}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    renderCheckoutCart();
    updateCartCount();
}