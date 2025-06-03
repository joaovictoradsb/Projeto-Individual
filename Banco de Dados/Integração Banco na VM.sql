  -- DROP DATABASE galo12;

CREATE DATABASE galo12;

USE galo12;


CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    email VARCHAR(80),
    senha VARCHAR(14)
);

select * from usuario;


CREATE TABLE Quiz (
    idQuiz INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    dtQuiz DATETIME
);

select * from quiz;

insert into Quiz values

(default , "Filme" , now());


CREATE TABLE Resultado (
    idResultado INT auto_increment,
    fkQuiz INT,	
    fkUsuario INT,
    Pontuacao INT,
    Erradas INT,
    dtPontuacao DATETIME,
    PRIMARY KEY (idResultado , fkQuiz, fkUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO Resultado VALUES



(default , 1 , 1 , 20 , 7 , now());

select * from resultado;

select Erradas from resultado where fkUsuario = '7' order by erradas desc limit 1;

select pontuacao from resultado where fkUsuario = '7' order by pontuacao desc limit 1;


SELECT fkQuiz,
fkUsuario,
Pontuacao,
dtPontuacao 
FROM Resultado;


SELECT * FROM Usuario;	

SELECT AVG(pontuacao) AS 'Média certo',
 avg(erradas) as 'Media erradas'
    FROM resultado;
    
    -- Selecionar todos as datas, pontuacao do usuario com fkUsuario
    
    select Pontuacao, Erradas, dtPontuacao from resultado where fkUsuario = '2' order by dtPontuacao asc;
