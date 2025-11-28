const db = require('./db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProprietarioSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  veiculos: [
    {
      placa: { type: String, required: true },
      ano: { type: Number, required: true },
      mensalidade: { type: Number, required: true },
    }
  ]
}, { collection: 'Proprietario' });

module.exports = mongoose.model('Proprietario', ProprietarioSchema);