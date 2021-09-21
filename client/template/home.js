console.log("CONNECTED!")
const aliAPIKey = process.env.aliAPIKey


//SEARCHING FOR PRODUCTS USING API
// const request = require('request');

const searchBtn = document.querySelector(".searchBtn");
const url = "https://ali-express1.p.rapidapi.com/search?";


const options = async () => {
    const searchValue = document.querySelector(".searchBar").value;
    const getQuery = await fetch (url + `query=${searchValue}`, { 
     method: 'GET',
     mode: "cors",
     qs: {query: 'sports', page: '1'},
     headers: {
        'x-rapidapi-host': 'ali-express1.p.rapidapi.com',
        'x-rapidapi-key': aliAPIKey,
        "Content-type": "application/json; charset=UTF-8",
        useQueryString: true,
  }
  
});
    const jsonItems = await getQuery.json();
    console.table(jsonItems.data.searchResult.mods.itemList.content[0-20])
    for(item of jsonItems.data.searchResult.mods.itemList.content){
        const itemName = document.createElement("h3")
        const itemImg = document.createElement("img")
        const productDiv = document.querySelector(".inventory")
        itemImg.src = item.image
        itemName.innerHTML = item.title
        productDiv.append(itemName, itemImg)

    }
}


searchBtn.addEventListener("click", () => options())