let menu = document.querySelector('.bx-menu');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
    document.body.classList.remove('open-cart');
};

const items = [
    {
        id: 1,
        name: "Leather Black Shoes out Edition 1",
        image: "card-image1.jpg",
        star: 4,
        price: 500,
    }, {
        id: 2,
        name: "Leather Black Shoes out Edition 2",
        image: "card-image2.jpg",
        star: 5,
        price: 450
    }, {
        id: 3,
        name: "Leather Black Shoes out Edition 3",
        image: "card-image3.jpg",
        star: 4,
        price: 399
    },
    {
        id: 4,
        name: "Leather Black Shoes out Edition 4",
        image: "card-image4.jpg",
        star: 3,
        price: 99
    },
    {
        id: 5,
        name: "Leather Black Shoes out Edition 5",
        image: "card-image5.jpg",
        star: 5,
        price: 599
    },
    {
        id: 6,
        name: "Leather Black Shoes out Edition 6",
        image: "card-image6.jpg",
        star: 4,
        price: 399
    },
    {
        id: 7,
        name: "Leather Black Shoes out Edition 7",
        image: "card-image7.jpg",
        star: 5,
        price: 269
    },
    {
        id: 8,
        name: "Leather Black Shoes out Edition 8",
        image: "card-image8.jpg",
        star: 5,
        price: 699
    },
    {
        id: 9,
        name: "Leather Black Shoes out Edition 9",
        image: "card-image9.jpg",
        star: 4,
        price: 449
    },
    {
        id: 10,
        name: "Leather Black Shoes out Edition 10",
        image: "card-image10.jpg",
        star: 4,
        price: 199
    },
    {
        id: 11,
        name: "Leather Black Shoes out Edition 11",
        image: "card-image11.jpg",
        star: 4,
        price: 500
    },
    {
        id: 12,
        name: "Leather Black Shoes out Edition 12",
        image: "card-image12.jpg",
        star: 4,
        price: 500
    }
];

var productBox = document.querySelector('.card-container');
var cartbox = document.querySelector('.icon-active');
var closebtn = document.querySelector('.closebtn');
var quantity = document.querySelector('.quantity');
var cartcontainer = document.querySelector('.cart-items-container ul');
var total = document.querySelector('.total');

let showItem = items.map((item, key) => {
    return `<div class="card">
        <img src = "${item.image}">
            <div class="card-content">
                <p class="title">${item.name}</p>
                <div class="price">
                    <del>$150.00</del>
                    <span class="amount">$${item.price}.00</span>
                </div>
                 <button class="add-to-cart" onClick="addtocart(${key})">Add to Cart</button>
            </div>
        </div>`;
}).join("");
productBox.innerHTML = showItem;

cartbox.addEventListener('click', () => {
    document.body.classList.add('open-cart');
});
closebtn.addEventListener('click', () => {
    document.body.classList.remove('open-cart');
});

let storeproducts = [];
function addtocart(id) {
    if (storeproducts[id] == null) {
        storeproducts[id] = items[id];
        storeproducts[id].quantity = 1;
    } else {
        storeproducts[id].quantity += 1;
    }
    reloadproduct();
}

function reloadproduct() {
    cartcontainer.innerHTML = '';
    let count = 0;
    let totalcount = 0;

    storeproducts.forEach((item, key) => {
        count += item.quantity;
        totalcount += item.quantity * item.price;

        let productlist = document.createElement('li');
        productlist.innerHTML =
            `<img src="${item.image}" alt="item">
                    <div class="card-content">
                        <p class="title">${item.name}</p>
                        <div class="price">
                            <span class="amount">$${item.price}.00</span>
                        </div>
                    </div>
                    <div class="changequantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
             </div>`;
        cartcontainer.append(productlist);

    })
    quantity.style.display = 'block';
    quantity.innerHTML = count;
    total.innerHTML = `$${totalcount}.00`;
}

const btnpopup = document.querySelector('.btnlogin_popup');
const cover_box = document.querySelector('.cover_box');
const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');
const iconclose = document.querySelector('.icon_close');
const home = document.querySelector('.home');


function activatecoverbox() {
    cover_box.classList.add('open');
}
function deactivatecoverbox() {
    cover_box.classList.remove('open');
}
function activatepopup() {
    cover_box.classList.add('active_popup');
    cover_box.style.display = 'block';
    // document.style.backdropFilter = 'blur(10px)';
}
function deactivatecoverpopup() {
    cover_box.classList.remove('active_popup');
    cover_box.style.display = 'none';
}

register_link.addEventListener('click', activatecoverbox);
login_link.addEventListener('click', deactivatecoverbox);
btnpopup.addEventListener('click', activatepopup);
iconclose.addEventListener('click', deactivatecoverpopup);





