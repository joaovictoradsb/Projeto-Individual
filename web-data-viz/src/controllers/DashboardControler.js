var dashModel = require("../models/dashboardModel");

function buscarUsuariosPontuacoes(req, res) {

    dashModel.buscarUsuariosPontuacoes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhuma pontuação encontrada!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMaiorPontuacao(req, res) {
    const idUsuario = req.params.idUsuario;

    dashModel.buscarMaiorPontuacao(idUsuario)
        .then(resultados => {
            if (resultados.length > 0) {
                res.status(200).json(resultados);
            } else {
                res.status(204).send("Nenhum jogador encontrado!");
            }
        })
        .catch(erro => {
            console.error('Erro ao buscar a maior pontuação', erro);
            res.status(500).json({ erro: 'Erro ao buscar a maior pontuação' });
        });
}

function buscarMenorPontuacao(req, res) {
    const idUsuario = req.params.idUsuario;

    dashModel.buscarMenorPontuacao(idUsuario)
        .then(resultados => {
            if (resultados.length > 0) {
                res.status(200).json(resultados);
            } else {
                res.status(204).send("Nenhum jogador encontrado!");
            }
        })
        .catch(erro => {
            console.error('Erro ao buscar a menor pontuação', erro);
            res.status(500).json({ erro: 'Erro ao buscar a menor pontuação' });
        });
}


function buscarMediaPontuacao(req, res) {

  dashModel.buscarMediaPontuacao()
    .then(resultado => res.status(200).json(resultado[0]))
    .catch(erro => {
      console.error("Erro ao buscar média de pontuação:", erro);
      res.status(500).json({ erro: "Erro ao buscar média de pontuação." });
    });
}

module.exports = {
    buscarMaiorPontuacao,
    buscarMenorPontuacao,
    buscarMediaPontuacao,
    buscarUsuariosPontuacoes
}