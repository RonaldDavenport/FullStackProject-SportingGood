console.log("CONNECTED!")

searchUrl = ""

const searchBtn = document.querySelector(".searchBtn");
const productOptions = async () => {
    const searchValue = document.querySelector(".searchBar").value;
    const getQuery = await fetch (searchUrl + `${searchValue}`, { 
     method: 'GET',
     mode: "cors",
     headers: {
        "Content-type": "application/json; charset=UTF-8",     
  },
     body: JSON.stringify(getQuery)
});
    const jsonItems = await getQuery.json();
    console.table(jsonItems)
    for(item of jsonItems){
        const itemName = document.createElement("h3");
        const itemImg = document.createElement("img");
        const itemPrice = document.createElement("p")
        const addToCart = document.createElement("button");
        const productDiv = document.querySelector(".inventory");
        itemImg.src = item.image
        itemName.innerHTML = item.title
        addToCart.name = "Add to Cart"
        productDiv.append(itemName, itemImg, itemPrice,addToCart)

    }
}


searchBtn.addEventListener("click", () => options())