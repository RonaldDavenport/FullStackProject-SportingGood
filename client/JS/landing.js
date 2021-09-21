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

//Logging In Exsisting User
const loginBtn = document.querySelector(".logIn")
const exsitingUser = async () =>{
    const url = "";
    const userName = document.querySelector(".username").value;
    const passWord = document.querySelector(".login_password").value;
    const verify = {
        //column username
        //column password
    };
    const verifyUser = await fetch (url,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(verifyUser),
    });
    console.log(verifyUser)
    };
loginBtn.addEventListener("click", () => exsitingUser() )