var graficoModel = require("../models/graficoModel");

function buscarPontuacao(req, res) {
    const { fkQuiz } = req.params;

    graficoModel.buscarPontuacao(fkQuiz).then(function (resultado) {
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

function buscarJogadoresPontuacoes(req, res) {
    const { liga } = req.body;

    if (!liga) {
        return res.status(400).json({ erro: 'Liga não informada.' });
    }

    graficoModel.buscarJogadoresPontuacoes(liga)
        .then(resultados => res.json(resultados))
        .catch(erro => {
            console.error('Erro ao buscar pontuações dos jogadores: ', erro);
            res.status(500).json({ erro: 'Erro ao buscar as pontuações dos jogadores.' });
        });
}

function buscarMelhoresPontuadores(req, res) {
    const fkQuiz = req.params.fkQuiz;

    graficoModel.buscarMelhoresPontuadores(fkQuiz)
        .then(resultados => {
            if (resultados.length > 0) {
                res.status(200).json(resultados);
            } else {
                res.status(204).send("Nenhum jogador encontrado!");
            }
        })
        .catch(erro => {
            console.error('Erro ao buscar os melhores pontuadores: ', erro);
            res.status(500).json({ erro: 'Erro ao buscar os melhores pontuadores.' });
        });
}

function buscarPontuacaoUsuarioPorLiga(req, res) {
    const idUsuario = req.params.idUsuario;
    graficoModel.buscarPontuacaoUsuarioPorLiga(idUsuario)
        .then(resultados => res.json(resultados))
        .catch(erro => {
            console.error('Erro ao buscar pontuação do usuário por liga:', erro);
            res.status(500).json({ erro: 'Erro ao buscar os dados.' });
        });
}

function buscarTopTresPontuadores(req, res) {
  const fkQuiz = req.params.fkQuiz;

  graficoModel.topTresTempos(fkQuiz)
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error("Erro ao buscar top 3 tempos:", erro);
      res.status(500).json({ erro: "Erro ao buscar top 3 tempos." });
    });
}

function buscarMediaPontuacao(req, res) {
  const { idUsuario, fkQuiz } = req.params;

  graficoModel.mediaPontuacaoUsuario(idUsuario, fkQuiz)
    .then(resultado => res.status(200).json(resultado[0]))
    .catch(erro => {
      console.error("Erro ao buscar média de pontuação:", erro);
      res.status(500).json({ erro: "Erro ao buscar média de pontuação." });
    });
}

module.exports = {
    buscarPontuacao,
    buscarJogadoresPontuacoes,
    buscarMelhoresPontuadores,
    buscarPontuacaoUsuarioPorLiga,
    buscarTopTresPontuadores,
    buscarMediaPontuacao
}