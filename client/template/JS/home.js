console.log("CONNECTED!")
//SEARCHING DATABASE FOR PRODUCTS
const searchBtn = document.querySelector(".searchBtn");
const productOptions = async () => {
    searchUrl = "http://localhost:3001/viewProducts"
    const searchValue = document.querySelector(".searchBar").value;
    const getQuery = await fetch (searchUrl, { 
     method: 'GET',
     mode: "cors",
     headers: {
        "Content-type": "application/json; charset=UTF-8",     
  },
     attributes: [`${searchValue}`],
     body: JSON.stringify(getQuery)
});
    const jsonItems = await getQuery.json();
    console.table(jsonItems)
    for(item of jsonItems){
        const itemName = document.createElement("h3");
        const itemImg = document.createElement("img");
        const itemPrice = document.createElement("h4");
        const itemID = document.querySelector("p")
        const addToCart = document.createElement("button");
        const productDiv = document.querySelector(".inventory");
        itemImg.src = item.Imageurl;
        itemName.innerHTML = item.Name;
        itemPrice.innerHTML = item.Price;
        itemID.innerHTML = item.productID;
        itemID.className += ".productID";
        addToCart.className += ".addToCart";
        addToCart.name = "Add to Cart";
        productDiv.append(itemName, itemImg, itemPrice,addToCart);

    };
};
searchBtn.addEventListener("click", () => options())

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

$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });