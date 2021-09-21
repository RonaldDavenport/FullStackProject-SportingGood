const Sequelize = require("sequelize")
const {Users} = require("../server/models")
const {Orders} = require("../server/models")
const {Products} = require("../server/models")
console.log(Users)
console.log(Orders)
console.log(Products)
const express = require("express")
const cookieParser = require('cookie-parser')
const helmet = require("helmet")
const path = require("path")
const PORT = process.env.PORT || 3001;
const es6Renderer = require('express-es6-template-engine');



const app = express();
app.use(cookieParser());
app.use(helmet());
// const bodyParser = require('body-parser')
// const PORT = 3001


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("./template",express.static(path.join(__dirname, './template')));
app.engine('html', es6Renderer);
app.set('views', './template')
app.set('view engine','html');


// app.set("views", path.join(__dirname, "templates"));

app.get("/", (req, res) => {
    // check if user is logged in, by checking cookie
    let username = req.cookies.username;
  
    // render the home page
    return res.render("home", {
      username,
    });
  });
  

app.get("/login", (req, res) => {
    // check if there is a msg query
    let bad_auth = req.query.msg ? true : false;
  
    // if there exists, send the error.
    if (bad_auth) {
       res.render('landing', {
           locals: {bad_auth},
        error: "Invalid username or password",
      });
    } else {
      // else just render the login
       res.render('landing', {locals: {bad_auth}});
    }
  });

  app.get("/welcome", (req, res) => {
    // get the username
    let username = req.cookies.username;
  
    // render welcome page
    return res.render("home", {
      username,
    });
  });

  app.post("/process_login", (req, res) => {
    // get the data
    let { username, password } = req.body;
  
    // fake test data
    let userdetails = {
      username: "Bob",
      password: "123456",
    };
  
    // basic check
    if (
      username === userdetails["username"] &&
      password === userdetails["password"]
    ) {
      // saving the data to the cookies
      res.cookie("username", username);
      // redirect
      return res.redirect("./home");
    } else {
      // redirect with a fail msg
      return res.redirect("landing?msg=fail");
    }
  });

  app.get("/logout", (req, res) => {
    // clear the cookie
    res.clearCookie("username");
    // redirect to login
    return res.redirect("/login");
  });
  

app.post("/createUser", async (req,res)=>{
    const { firstname, lastname, username, password, email } = req.body;
    const newUser = await Users.create({
        firstname,
        lastname,
        username,
        password,
        email
    });
    console.log(newUser)
    // res.render("index",{locals: {newtask:newtask}});
    res.send(newUser)
    
    
    })
app.post("/viewProducts", async (req,res)=>{
    const allProducts = await Products.findAll({
       attributes: [
           'Name',
           'Price',
           'Imageurl'
       ]
    })
    res.send(allProducts)
})
app.post("/createOrder", async (req,res)=>{
    const {userId,productID,status}=req.body
    const newOrder = await Orders.create({
        userId,
        productID,
        status

    

        
    })
    res.send(newOrder)
})
app.post("/updateAccountInfo/:id", async (req,res) =>{
  const {firstname,lastname,username,password}= req.body
  const newInfo = await Users.update(req.body,{
      where:{
          id:req.params.id
      }
      

  }) 
  res.send(newInfo)
})
app.post("/deleteOrder/:id", async (req,res) =>{
    const deleteOrder = await Orders.destroy({
        where:{
            id:req.params.id
        }
    })
    res.send("Your order has been cancelled.")
})
app.post("/viewOrders/:id", async (req,res)=>{
    const viewOrder = await Orders.findAll(
        {
            include: [{
                model: Users
            }],

            where:{
                userId:req.params.id
            }
        }
    )
  res.send(viewOrder)
})

app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
     maxAge: 5050,
     expires: new Date ('12 12 2021'),
     secure: true,
     httpOnly: true,
     sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});

app.get("/getcookie",(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie()
    res.send('Cookie has been deleted successfully');
});

app.listen(PORT,console.log("port is running"))