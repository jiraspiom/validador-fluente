'use strict'

const mongoose = require("mongoose")
const Produto = mongoose.model("Produto")
//exemplo sendo usado
const ContratoValidacao = require("./validadorcampos")

exports.post = (req, res) => {
    let contrato = new ContratoValidacao()
    contrato.hasMinLen(req.body.nome, 3, "O nome deve conter pelo meno 3 caracteres")
    contrato.hasMinLen(req.body.descricao, 10, "A descricao deve conter no minimo 10 caracteres")

    if (!contrato.isValid()){
        //aqui retorna os erros do jeito que voce desejar.
        res.send(contrat.erros())
        return;
    }

    var Produto = new Produto(
        {
            nome: req.body.nome,
            descricao: req.body.descricao}
        ).save().then().catch()
}