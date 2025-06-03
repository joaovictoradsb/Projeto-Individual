var database = require("../database/config");

function buscarMaiorPontuacao(fkUsuario) {
  const instrucaoSql = `
select pontuacao
 from resultado where 
 fkusuario = '${fkUsuario}'
  order by pontuacao desc limit 1;
`;
  return database.executar(instrucaoSql);
}

function buscarMenorPontuacao(fkUsuario) {
  const instrucaoSql = `
select erradas
 from resultado where
  fkusuario = '${fkUsuario}' order by 
  erradas desc limit 1;`;

  return database.executar(instrucaoSql);
}

function buscarMediaPontuacao() {
  const instrucaoSql = `
    SELECT AVG(pontuacao) AS 'média'
    FROM resultado;`;

  return database.executar(instrucaoSql);
}

function buscarTentativasPorUsuario(fkUsuario) {
  const instrucaoSql = `

select pontuacao, erradas, dtpontuacao
 from resultado where fkusuario
  = '${fkUsuario}' order by dtpontuacao
   asc;`;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMaiorPontuacao,
  buscarMenorPontuacao,
  buscarMediaPontuacao,
  buscarTentativasPorUsuario
};
