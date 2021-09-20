console.log("connected!")

//  CREATING A NEW USER
const signUpbtn = document.querySelector(".signUp");
const createNewUser = async () => {
    const url = "";
    const newUserName = document.querySelector(".username").value;
    const newUser = {
        //columnName User Name
        //columnName Password
        //columnName First Name
        //columnName Last Name
        //columnName Email 
    };
    const createUser = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newUser),
    });
    console.log(createUser)
};
signUpbtn.addEventListener("click", () => createNewUser())
