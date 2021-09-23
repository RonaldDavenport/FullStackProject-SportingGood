console.log("Connected!")
//TO VIEW ITEMS CART
const viewUserCart =  async () => {
    const cartUrl = "http://localhost:3001/viewOrders"
    const userOrder = await fetch (cartUrl, {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.parse(JSON.stringify(viewOrder))
    }); 
    console.log(userOrder)
    const jsonOrder = await viewOrder.json();
    for (const orders of jsonOrder){
        if (userId === userId){
            const dBtn = document.createElement("button")
            dBtn.name = "REMOVE";
            dBtn.className += "deleteBtn"
            const userCart = document.querySelector(".itemsInCart");
            userCart.append(jsonOrder, dBtn);
        };
    };
};
  viewUserCart()   

//NAVBAR FUNCTIONS
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });