
const productContain = document.querySelector(".inventory");
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
const addToCart= document.createElement("button")
const productDiv = document.createElement("div");
productDiv.className="productDiv"
const productName = document.createElement("h3");
const productImg = document.createElement("img");
const productPrice = document.createElement("h4");
productImg.height= 400
productImg.width = 400
productImg.className=(".productIMG")
productName.innerHTML = itemName
productPrice.innerHTML = itemPrice
productImg.src = itemURL
addToCart.innerHTML="Add To Cart"
addToCart.className="addToCart"
productDiv.append(productImg, productName, productPrice, addToCart)
productContain.append(productDiv);
}};
productView();   

const searchBtn = document.querySelector(".bn53");
const productOptions = async () => {
const searchValue = document.querySelector(".searchBar").value;
const searchUrl = `http://localhost:3001/viewProducts/${searchValue}`
const getQuery = await fetch (searchUrl, {
     method: 'POST',
     mode: "cors",
     headers: {
        "Content-type": "application/json; charset=UTF-8",
  },
  
});
const jsonItems = await getQuery.json();
for(const items of jsonItems){
       const itemName = items.Name;
        const itemPrice = items.Price;
        const itemURL = items.Imageurl;
        const itemID = items.id
        productContain.innerHTML= ""
        const searchedItemDiv = document.createElement("div")
        const searchedProductName = document.createElement("h3");
        console.log(itemName)
        const searchedProductImage = document.createElement("img");
        searchedProductImage.height = 200
        searchedProductImage.width = 200
        const searchedItemPrice = document.createElement("h4");
        const searchedItemID = document.createElement("h3")
        const addToCart = document.createElement("button");
        searchedProductImage.src = itemURL;
        searchedProductName.innerHTML = itemName;
        searchedItemPrice.innerHTML = itemPrice;
        searchedItemID.innerHTML= "Product ID:" + " " + items.id;
        searchedItemID.className += ".productID";
        addToCart.className = "addToCart";
        addToCart.innerHTML = "Add to Cart";
        searchedItemDiv.append(searchedProductImage, searchedProductName, searchedItemPrice,searchedItemID,addToCart);
        productContain.append(searchedItemDiv);
    };
};
searchBtn.addEventListener("click", () => productOptions())

//ADDING PRODUCT TO CART
const addBtn = document.getElementsByClassName(".addToCart")[0]
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
    function addToCartMessage(){
        alert( "has been add to your cart!")
    }

        addBtn.addEventListener("click", () => {fillCart(); addToCartMessage();})
};


//NAVBAR FUNCTIONS
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });
    
    