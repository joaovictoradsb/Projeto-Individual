var quizModel = require("../models/quizModel");

function buscarPerguntasPorQuiz(req, res) {
    const fkQuiz = req.params.fkQuiz

    quizModel.buscarPerguntasPorQuiz(fkQuiz)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar perguntas:", erro)
            res.status(500).json({ erro: "Erro ao buscar perguntas" })
        });
}

function cadastrarPontos(req, res) {
  const { idUsuario, fkQuiz, pontos, tempo } = req.body;

  quizModel.cadastrarPontos(idUsuario, fkQuiz, pontos, tempo)
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao cadastrar pontuação." });
    });
}

module.exports = {
    buscarPerguntasPorQuiz,
    cadastrarPontos
};