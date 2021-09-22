console.log("connected!")

//  CREATING A NEW USER
const signUpbtn = document.querySelector(".signUp");
const createNewUser = async () => {
    const url = "http://localhost:3001/createUser";
    console.log("fired")
    console.log(url)
    const newFname = document.querySelector(".fname").value;
    const newUserName = document.querySelector(".username").value;
    const newPassword = document.querySelector(".password").value;
    const newLname = document.querySelector(".lname").value;
    const newEmail = document.querySelector(".email").value;

     console.log(newFname)
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

const newHTML= async () =>{
    location.href="https://google.com"
}
signUpbtn.addEventListener("click", () => createNewUser())
// signUpbtn.addEventListener("click", location.href = "home.html" )

//Logging In Exsisting User
const loginBtn = document.querySelector(".logIn")

const exsitingUser = async (e) =>{
    e.preventDefault()
    const url = "http://localhost:3001/process_login";
    const userName = document.querySelector(".username").value;
    const passWord = document.querySelector(".login_password").value;
    const verify = {
        userName:userName,
        passWord:passWord
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

loginBtn.addEventListener("click", () => exsitingUser() )




