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

Postagens.sync({force:true});