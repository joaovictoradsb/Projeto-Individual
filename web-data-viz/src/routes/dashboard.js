var express = require("express");
var router = express.Router();

var dashController = require("../controllers/DashboardControler");


router.get("/buscarMaiorPontuacao/:idUsuario", function (req, res) {dashController.buscarMaiorPontuacao(req, res);});

router.get("/buscarMenorPontuacao/:idUsuario", function (req, res) {dashController.buscarMenorPontuacao(req, res);});

router.get("/buscarMediaPontuacao", function (req, res) {dashController.buscarMediaPontuacao(req, res);});

module.exports = router;