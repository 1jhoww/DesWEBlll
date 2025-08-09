const express = require ("express");
const app = express();

app.get("/",function(req,res) {
    res.send("Seja bem vindo ao meu app!")
});

app.get("/sobre", function(req,res){
    res.send("Essa é minha página sobre!")
});

app.get("/forum", function(req,res){
    res.send("Esse é meu forum!")
});

app.get("/ola/:nome/:cargo/:situacao", function(req,res){
 res.send("<h1> Olá "+ req.params.nome+"</h1>"
    +"<h2> Seu cargo é: "+ req.params.cargo+"</h2>"
    +"<h3> Sua situação é: "+ req.params.situacao+"</h3>"
 )
});

app.listen(8081, function(){
    console.log("Servidor rodando na url https://localhost:8081");
});