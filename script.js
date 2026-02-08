// Mock Data for Dropshipping Products
const products = [
    {
        id: 1,
        name: "Smart Watch Ultra",
        price: 49.99,
        image: "C:\Users\User\web developement website demo\image\"
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80"
    },
    {
        id: 3,
        name: "Portable Blender",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?w=400&q=80"
    },
    {
        id: 4,
        name: "LED Gaming Lights",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
    },
    {
        id: 5,
        name: "Product 5",
        price: 20.00,
        image: "https://placehold.co/400x300?text=Product+5"
    },
    {
        id: 6,
        name: "Product 6",
        price: 25.00,
        image: "https://placehold.co/400x300?text=Product+6"
    },
    {
        id: 7,
        name: "Product 7",
        price: 30.00,
        image: "https://placehold.co/400x300?text=Product+7"
    },
    {
        id: 8,
        name: "Product 8",
        price: 35.00,
        image: "https://placehold.co/400x300?text=Product+8"
    },
    {
        id: 9,
        name: "Product 9",
        price: 40.00,
        image: "https://placehold.co/400x300?text=Product+9"
    },
    {
        id: 10,
        name: "Product 10",
        price: 45.00,
        image: "https://placehold.co/400x300?text=Product+10"
    },
    {
        id: 11,
        name: "Product 11",
        price: 50.00,
        image: "https://placehold.co/400x300?text=Product+11"
    },
    {
        id: 12,
        name: "Product 12",
        price: 55.00,
        image: "https://placehold.co/400x300?text=Product+12"
    },
    {
        id: 13,
        name: "Product 13",
        price: 60.00,
        image: "https://placehold.co/400x300?text=Product+13"
    },
    {
        id: 14,
        name: "Product 14",
        price: 65.00,
        image: "https://placehold.co/400x300?text=Product+14"
    },
    {
        id: 15,
        name: "Product 15",
        price: 70.00,
        image: "https://placehold.co/400x300?text=Product+15"
    },
    {
        id: 16,
        name: "Product 16",
        price: 75.00,
        image: "https://placehold.co/400x300?text=Product+16"
    },
    {
        id: 17,
        name: "Product 17",
        price: 80.00,
        image: "https://placehold.co/400x300?text=Product+17"
    },
    {
        id: 18,
        name: "Product 18",
        price: 85.00,
        image: "https://placehold.co/400x300?text=Product+18"
    },
    {
        id: 19,
        name: "Product 19",
        price: 90.00,
        image: "https://placehold.co/400x300?text=Product+19"
    },
    {
        id: 20,
        name: "Product 20",
        price: 95.00,
        image: "https://placehold.co/400x300?text=Product+20"
    },
    {
        id: 21,
        name: "Product 21",
        price: 100.00,
        image: "https://placehold.co/400x300?text=Product+21"
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

let cart = [];

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    
    // Update UI
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${product.name} added to cart!`);
}

function toggleCart() {
    if(cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`You have ${cart.length} items in your cart. Total: $${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}`);
    }
}