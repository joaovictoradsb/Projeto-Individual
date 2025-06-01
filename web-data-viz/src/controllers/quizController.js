var quizModel = require("../models/quizModel");


function cadastrarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idusuario = req.body.idUsuarioServer;
    var pontuacaoTotal = req.body.resultadoServer;
    var erradas = req.body.erradasServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(idusuario , pontuacaoTotal , erradas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir resultado Quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    cadastrarResultado
}