const Sequelize = require ('sequelize');
const sequelize = new Sequelize('projeto1','root','root',{
    host: "localhost",
    dialect: "mysql"
});

const Postagens = sequelize.define('postagens', {

    titulo: {

        type: Sequelize.STRING
    },

    conteudo: {
        type:Sequelize.TEXT
    }
});

//Postagens.sync({force:true}); 

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    },
});

//Usuario.sync({force:true});

Usuario.create({
    nome:"Mario",
    sobrenome:"Jesus",
    idade:"33",
    email:"analista.mario@gmail.com"
});