'use strict'

const mongoose = require("mongoose");
const Enterprises = mongoose.model('Enterprises');

// Busca as tarefas do usuário cadastradas
exports.get = async () => {
    const res = await Enterprises.find().exec();
    const res_aux = res.map(item=> {
      return  {
            nome: item.nome,
            razao_social: item.razao_social,
            endereco: item.endereco,
            atividade_primaria: item.atividade_primaria,
            idlocal: item.idlocal,
        }})
        
    return res_aux;
}

// Insere tarefas banco de dados
exports.create = async (body) => {
    console.log(body)
    var enterprises = new Enterprises(body);
    await enterprises.save();
    return true;
}

// Remove tarefas banco de dados
exports.remove = async (id) => {
    console.log(id)
    var enterprises = await Enterprises.deleteOne({ idlocal: id });
    await enterprises.save();
    return true
}