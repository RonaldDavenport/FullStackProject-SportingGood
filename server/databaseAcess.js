const Sequelize = require("sequelize")
const {Users} = require("../server/models")
const {Orders} = require("../server/models")
const {Products} = require("../server/models")
console.log(Users)
console.log(Orders)
console.log(Products)
const express = require("express")
const session = require("express-session")
const cookieParser = require('cookie-parser')
const es6Renderer = require ("express-es6-template-engine")
const helmet = require("helmet")
const path = require("path")
const cors = require('cors')
const PORT = 3001;

const { where } = require("sequelize")



const app = express();
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(session
  ({
    secret: "secret",
    resave : false,
    saveUninitialized: true,
    cookie: {secure:false, maxAge:2592000}
  }

  ))
// const bodyParser = require('body-parser')
// const PORT = 3001
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self'; font-src 'self'; img-src 'https://nike.com' https://nike.com; script-src 'self'; style-src 'self' ; frame-src 'self'"
  );
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/client/template/JS",express.static(path.join(__dirname, 'js')));
app.engine('html', es6Renderer);
console.log(__dirname)
app.set('views', path.join(__dirname,'templates'));
app.set('view engine','html');

// app.set('view engine','html');


// app.set("views", path.join(__dirname, "templates"));

app.get("/", (req, res) => {
  res.render("shoppingcart",{
    
   
  })

  });

  app.get("/home",  async (req,res)=>{
    return res.render("home")
  
     console.log('home')
   })
// console.log(home)
//    res.render('home', {
//      locals: {
//          allProducts:allProducts
//      }
//  });

    // res.render("home")
  
  
app.get("/shoppingCart",(req,res)=>{
  res.render("shoppingCart")
})

app.post("/login", async (req, res) => {
    const {username,password}=req.body
    const checkUser = await Users.findOne({
      where:{
        username,
        password,
      },
    });

    const userFound = checkUser.dataValues;
    console.log(userFound)
    if(checkUser.dataValues){
      req.session.user = userFound;
      res.send("home")
    } else {
      
      res.status(401)
      .send("Try Again or Sign Up!")
    }
  });

  // app.get("/welcome", (req, res) => {
  //   // get the username
  //   let username = req.cookies.username;
  
  //   // render welcome page
  //   return res.render("home", {
  //     username,
  //   });
  // });

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
       res.redirect("home");
    } else {
      // redirect with a fail msg
       res.redirect("landing?msg=fail");
    }
  });

  app.get("/logout", (req, res) => {
    // clear the cookie
    res.clearCookie("username");
    // redirect to login
    return res.redirect("/login");
  });
  

app.post("/createUser", async (req,res)=>{
  // res.render('landing')
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

    
    
  
app.post("/viewProducts/:Category", async (req,res)=>{
    const searchedProducts = await Products.findAll({
       attributes: [
             'id',
           'Name',
           'Price',
           'Imageurl'
           

       ],
       where:
       {Category:req.params.Category}
      
    })
    console.log(searchedProducts)
    res.send(searchedProducts)

   
  })




  app.post("/viewProducts", async (req,res)=>{
    const allProducts = await Products.findAll({
       attributes: [
           'Name',
           'Price',
           'Imageurl'
           

       ]
       
      
    })
    // res.send(allProducts)

    console.log(allProducts)
    res.send(allProducts)
  });
  
app.post("/createOrder", async (req,res)=>{
    const {userId, productID, status}=req.body;
    const newOrder = await Orders.create({
       userId,
        productID:productID,
        status

    

        
    })
    res.send(newOrder)
})
app.post("/updateAccountInfo/", async (req,res) =>{
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

app.post("/deleteProduct/:id", async (req,res)=>{
  const deleteProduct = await Products.destroy({
    where:{
      id:req.params.id,
      Name:"Shooting Sleeve"
    }
  })
  res.send("Product Deleted")
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

app.listen(PORT,console.log(PORT ,"port is running"))