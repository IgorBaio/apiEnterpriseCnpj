'use strict'

const repository = require('../repositories/enterprises_repository');

// Pega todas as tarefas do usuário
exports.get = async (req, res, next,) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}

//Remove a tarefa no banco de dados
exports.delete = async (req, res, next,) => {
    try {
        console.log(req.body)
        let data = await repository.remove(req.body.idlocal);
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}

//Insere a tarefa no banco de dados
exports.post = async (req, res, next,) => {
    try {
        //Insere no banco de dados
        const data = await repository.create({
            nome: req.body.nome,
            razao_social: req.body.razao_social,
            endereco: req.body.endereco,
            atividade_primaria: req.body.atividade_primaria,
            idlocal: req.body.idlocal,
        });
        res.status(200).send(data);

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}

