console.log("connected!")

const updateBtn = document.querySelector(".btn")
const updateUser = async () =>{
    const updateUrl = "http://localhost:3001/updateAccountInfo/"
    const updateFnm = document.getElementById("fName").value;
    const updateLnm = document.getElementById("lName").value;
    const updatUnm = document.getElementById("usName").value;
    const updatePswd = document.getElementById("pswd").value;
    const newInfo ={
        firstname : updateFnm,
        lastname : updateLnm,
        username : updatUnm,
        password : updatePswd
    };
    const updateInfo = await fetch (updateUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newInfo),
    });
    console.log(updateInfo)
};
function updateMessage () {
    alert("Thanks, Your Account Has Been Updated!")
}
updateBtn.addEventListener("click", () => {updateUser(); updateMessage();})

























//NAVBAR FUNCTIONS
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });