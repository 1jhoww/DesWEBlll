const express = require ("express");
const app = express();


app.get("/sobre", function(req,res){
   res.sendFile(__dirname+"/html/sobre.html");
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

app.get("/", function(req,res){
    res.sendFile(__dirname+"/html/pag01.html");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});