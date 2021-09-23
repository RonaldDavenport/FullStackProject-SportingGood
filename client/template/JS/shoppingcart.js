console.log("Connected!")
//TO VIEW ITEMS IN CART
const viewBtn = document.querySelector(".view_cart");
const viewUserCart =  async () => {
    const cartUrl = "http://localhost:3001/viewOrders"
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

//NAVBAR FUNCTIONS
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });