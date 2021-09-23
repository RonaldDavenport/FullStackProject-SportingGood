// const products = require("../../../server/models/products");

// const productss = require("../../../server/models/products");
const productContain = document.querySelector(".inventory");
console.log("CONNECTED!")
//PRODUCTS LISTED ON HOME PAGE
const productView = async () =>{
    const productsURL = "http://localhost:3001/viewProducts";
    const fetchProducts = await fetch (productsURL, {
        method: 'POST',
         mode: "cors",
         headers: {
            "Content-type":"application/json; charset=UTF-8",

      },
});
const json = await fetchProducts.json ();

for(const items of json){
const itemName = items.Name;
const itemPrice = items.Price;
const itemURL = items.Imageurl;
const productDiv = document.createElement("div");
const productName = document.createElement("h3");
const productImg = document.createElement("img");
const productPrice = document.createElement("h4");
productName.innerHTML = itemName
productPrice.innerHTML = itemPrice
productImg.src = itemURL
productDiv.append(productImg, productName, productPrice)
productContain.append(productDiv);

}
console.log(json)
};

productView();
    productView();
//SEARCHING DATABASE FOR PRODUCTS
const searchBtn = document.querySelector(".bn53");
const productOptions = async () => {
    // searchUrl = "http://localhost:3001/viewProducts"
    const searchValue = document.querySelector(".searchBar").value;
    console.log(searchValue)
   const searchUrl = `http://localhost:3001/viewProducts/${searchValue}`
    const getQuery = await fetch (searchUrl, {
     method: 'POST',
     mode: "cors",
     headers: {
        "Content-type": "application/json; charset=UTF-8",
  },
    //  attributes: [`${searchValue}`],
    //  body: JSON.stringify(getQuery)
});
    const jsonItems = await getQuery.json();
    console.log(jsonItems)
    // productContain.innerHTML =""
    for(const items of jsonItems){
        // productContain.innerHTML =""
        productContain.innerHTML= ""
        const searchedItemDiv = document.createElement("div")
        const itemName = document.createElement("h3");
        console.log(itemName)
        const itemImg = document.createElement("img");
        const itemPrice = document.createElement("h4");
        const itemID = document.createElement("h3")
        const addToCart = document.createElement("button");
        const productDiv = document.querySelector(".inventory");
        itemImg.src = items.Imageurl;
        itemName.innerHTML = items.Name;
        itemPrice.innerHTML = items.Price;
        itemID.innerHTML=(items.id)
        // itemID.innerHTML = item.id;
        // itemID.className += ".productID";
        addToCart.className += ".addToCart";
        addToCart.innerHTML = "Add to Cart";
        searchedItemDiv.append(itemName, itemImg, itemPrice,itemID,addToCart);
        productContain.append(searchedItemDiv)
    };
    console.log(jsonItems)
};
searchBtn.addEventListener("click", () => productOptions())
//ADDING PRODUCT TO CART



const addBtn = document.querySelector(".addToCart");
const fillCart = async () => {
    const orderUrl = "http://localhost:3001/createOrder";
    const productID = document.querySelector(".productID");
    const newOrder = {
        productID: productID,
    };
    const createOrder = await fetch(orderUrl, {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newOrder)
    });
        console.table(createOrder)
};
addBtn.addEventListener("click", () => fillCart())
//NAVBAR FUNCTIONS
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });