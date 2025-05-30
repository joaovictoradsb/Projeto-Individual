var database = require("../database/config");

function buscarJogadoresPontuacoes(liga) {
    const instrucaoSql = `
        SELECT 
            usuario.idUsuario AS jogador_id, 
            usuario.nome AS nome_jogador, 
            MAX(resultado.pontos) AS pontos
        FROM resultado
        JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
        JOIN quizzes AS q ON resultado.fkQuiz = q.idQuiz
        WHERE q.liga = '${liga}'
        GROUP BY usuario.idUsuario, usuario.nome
        ORDER BY pontos DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoUsuarioPorLiga(idUsuario) {
    const instrucaoSql = `
        SELECT 
            q.liga AS liga,
            MAX(r.pontos) AS pontos
        FROM resultado AS r
        JOIN quizzes AS q ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuario}
        GROUP BY q.liga
        ORDER BY pontos DESC;
    `;
    return database.executar(instrucaoSql);
}

function buscarMelhoresPontuadores(fkQuiz) {
   const instrucaoSql = `
    SELECT 
        u.nome AS 'Nome Jogador', 
        MAX(r.pontos) AS pontos
    FROM resultado as r
    JOIN usuario as u ON r.fkUsuario = u.idUsuario
    WHERE r.fkQuiz = ${fkQuiz}
    GROUP BY u.idUsuario, u.nome
    ORDER BY pontos DESC
    LIMIT 3;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacao(fkQuiz) {
    const instrucaoSql = `
        SELECT AVG(pontos) AS 'avg(pontos)'
        FROM resultado
        WHERE fkQuiz = ${fkQuiz};
    `;
    return database.executar(instrucaoSql);
}

function topTresTempos(fkQuiz) {
  const instrucao = `
    SELECT 
        u.nome,
        CONCAT(
            LPAD(FLOOR(r.tempo_segundos / 60), 2, '0'),
            ':',
            LPAD(r.tempo_segundos % 60, 2, '0')
        ) AS tempo_formatado
    FROM resultado AS r
    JOIN usuario AS u ON r.fkUsuario = u.idUsuario
    WHERE r.fkQuiz = ${fkQuiz}
      AND r.tempo_segundos IS NOT NULL
    ORDER BY r.tempo_segundos ASC
    LIMIT 3;
  `;
  return database.executar(instrucao);
}

function mediaPontuacaoUsuario(idUsuario, fkQuiz) {
  const instrucao = `
    SELECT AVG(pontos) AS media_pontuacao
    FROM resultado
    WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${fkQuiz};
  `;
  return database.executar(instrucao);
}

module.exports = {
    buscarJogadoresPontuacoes,
    buscarMelhoresPontuadores,
    buscarPontuacaoUsuarioPorLiga,
    buscarPontuacao,
    topTresTempos,
    mediaPontuacaoUsuario
}