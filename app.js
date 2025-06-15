const express = require("express");
const app = express();
const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const cookieParser = require("cookie-parser");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({extende:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set ("view engine","ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);




app.get("/",(req,res) =>{
    res.send("hey");

});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
