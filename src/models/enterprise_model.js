'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Criando o esquema do banco de dados
const schema = new Schema({    
    nome: {
        type: String,
        required: true,
    },
    razao_social: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: false,
    },
    atividade_primaria: {
        type: String,
        required: true,
    },
    idlocal: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Enterprises', schema);