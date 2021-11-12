var express = require("express")
var app = express()

const pug = require("pug")

app.use(express.static(__dirname+"/public"))

var perrosArray = [
    {raza: "Doberman", texto: "Perro grande", imagen: "doberman.jpg"},
    {raza: "Pastor Aleman", texto: "Perro mediano", imagen: "pastorAleman.jpg"},
    {raza: "Pug", texto: "Perro de pequeño", imagen: "pug.jpg"},
    {raza: "San Bernardo", texto: "Perro gigante", imagen: "sanBernardo.jpg"}
]

app.get("/", (req, res)=>{
    res.render("index.pug", {
        titulo: "Perros del mundo",
        texto: "Selecciona un perro",
        imagen: "perros.jpg",
        perros: perrosArray
    })
})

app.get("/perro/:raza", (req, res)=>{

    var datosPerro = perrosArray.filter((perro) => {
        if(req.params.raza == perro.raza){
            return perro
        }
    })[0]
    res.render("perro.pug", {
       raza: req.params.raza,
       data: datosPerro
    })
})

app.use((req,res)=> {
    res.status(400)

    var error = req.originalUrl

    res.render("404.pug", {texto:error})
})

app.listen(3000, ()=>{
    console.log("Escuchando desde el 3000")
})






