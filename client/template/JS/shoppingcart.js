console.log("Connected!")
const viewBtn = document.querySelector(".view_cart");

const cartUrl = ""
const viewUserCart =  async () => {
    const getCart = await fetch (cartUrl, {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(getCart)
    });
    const jsonCart = await getCart.json();
    const userCart = document.querySelector(".itemsInCart")
    userCart.append(jsonCart)

    };
 viewBtn.addEventListener("click", () => viewUserCart())   

