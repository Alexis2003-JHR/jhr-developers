const express = require("express");
const app = express();
const path = require("path");

//Configuración
app.set("puerto",80);
app.set("views",path.join(__dirname,"views"));
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");

//Rutas
app.get("/",(req,res)=>{
    res.render("index.html");
});

//Archivos estaticos
app.use(express.static(path.join(__dirname,"public")));

console.log("JHR");
app.listen(process.env.PORT || app.get("puerto"),()=>{
    console.log("Servidor web trabajando en el puerto",app.get("puerto"))
});
