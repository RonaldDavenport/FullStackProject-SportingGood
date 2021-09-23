console.log("connected!")
//  CREATING A NEW USER
const loginBtn = document.querySelector("#signIn")
const signUpbtn = document.querySelector("#signUp");
const createNewUser = async () => {
    const url = "http://localhost:3001/createUser";
    console.log("fired")
    console.log(url)
    const newFname = document.querySelector("#first").value;
    const newUserName = document.querySelector("#user").value;
    const newPassword = document.querySelector("#pass").value;
    const newLname = document.querySelector("#last").value;
    const newEmail = document.querySelector("#email").value;
     console.log(newFname)
    const newUser = {
        firstname:newFname ,
        lastname:newLname,
        username:newUserName,
        password:newPassword,
        email:newEmail
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
signUpbtn.addEventListener("click", () => createNewUser());
// signUpbtn.addEventListener("click", location.href = "home.html" )
//Logging In Exsisting User
// const loginBtn = document.getElementById("#signIn")
const exsitingUser = async () =>{
    const url = "http://localhost:3001/login";
    console.log(url)
    const username = document.querySelector("#userlogin").value;
    const password = document.querySelector("#passlogin").value;
    console.log(username)
    const verify = {
        username,
        password,
        //column username
        //column password
    };
    const verifyUser = await fetch (url,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(verify),
    });
    console.log(verifyUser)
    };
loginBtn.addEventListener("click", () =>  exsitingUser())





















