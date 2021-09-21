console.log("connected!")

//  CREATING A NEW USER
const signUpbtn = document.querySelector(".signUp");
const createNewUser = async () => {
    const url = "http://localhost:3001/createUser";
    const newFname = document.querySelector(".fname").value;
    const newUserName = document.querySelector(".username").value;
    const newPassword = document.querySelector(".password").value;
    const newLname = document.querySelector(".lname").value;
    const newEmail = document.querySelector(".email").value;
    const newUser = {
        firstname : newFname,
        lastname : newLname,
        username : newUserName,
        password :newPassword,
        email : newEmail
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
