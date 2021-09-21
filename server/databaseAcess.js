const Sequelize = require("sequelize")
const {Users} = require("../server/models")
const {Orders} = require("../server/models")
const {Products} = require("../server/models")
console.log(Users)
console.log(Orders)
console.log(Products)
const express = require("express")
const path = require("path")


const app = express();
// const bodyParser = require('body-parser')
const PORT = 3001

app.use(express.json())

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


app.listen(PORT,console.log("port is running"))