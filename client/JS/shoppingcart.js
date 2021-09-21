console.log("Connected!")
const viewBtn = document.querySelector(".view_cart");
const cartUrl = ""
const viewUserCart =  async () => {
    const getCart = await fetch (cartUrl, {
        method: 'GET',
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: 
    })
}
