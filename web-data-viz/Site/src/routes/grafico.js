var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/buscarJogadoresPontuacoes", function (req, res){graficoController.buscarJogadoresPontuacoes(req, res);});
router.get("/buscarPontuacaoUsuarioPorLiga/:idUsuario", function (req, res){graficoController.buscarPontuacaoUsuarioPorLiga(req, res);});
router.get("/buscarMelhoresPontuadores/:fkQuiz", function (req, res) {graficoController.buscarMelhoresPontuadores(req, res);});
router.get("/buscarPontuacao/:fkQuiz", function (req, res) {graficoController.buscarPontuacao(req, res);});
router.get('/buscarTopTresTempos/:fkQuiz', graficoController.buscarTopTresPontuadores);
router.get('/mediaPontuacao/:idUsuario/:fkQuiz', graficoController.buscarMediaPontuacao);


module.exports = router;