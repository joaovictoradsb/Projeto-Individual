var database = require("../database/config");

function buscarMaiorPontuacao(fkUsuario) {
    const instrucaoSql = `
select Pontuacao
 from resultado where 
 fkUsuario = '${fkUsuario}'
  order by pontuacao desc limit 1;
`
    return database.executar(instrucaoSql);
}

function buscarMenorPontuacao(fkUsuario) {
    const instrucaoSql = `
select Erradas
 from resultado where
  fkUsuario = '${fkUsuario}' order by 
  erradas desc limit 1;`

    return database.executar(instrucaoSql);
}

function buscarMediaPontuacao() {
    const instrucaoSql = `
    SELECT AVG(pontos) AS 'Média'
    FROM resultado;
    `;
    return database.executar(instrucaoSql);
}

function buscarUsuariosPontuacoes() {
    const instrucaoSql = `
SELECT
    r.fkQuiz AS Quiz,
    u.nome AS Usuário,
    r.pontos AS Pontuação
FROM Resultado r
JOIN Usuario u ON r.fkUsuario = u.idUsuario
JOIN (
    SELECT fkUsuario, MAX(idResultado) AS idMax
    FROM Resultado
    WHERE (fkUsuario, pontos) IN (
        SELECT fkUsuario, MAX(pontos)
        FROM Resultado
        GROUP BY fkUsuario
    )
    GROUP BY fkUsuario
) AS melhores ON r.idResultado = melhores.idMax
ORDER BY r.pontos DESC
LIMIT 10;`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
    buscarMaiorPontuacao,
    buscarMenorPontuacao,
    buscarMediaPontuacao,
    buscarUsuariosPontuacoes
}