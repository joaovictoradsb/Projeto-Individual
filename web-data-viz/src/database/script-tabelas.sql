

CREATE DATABASE galo12;

USE galo12;


-- Tabela de Usuários
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

-- Tabela de Quizzes
CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    fkUsuarioCriador INT NOT NULL,
    dataCriacao DATE,
    FOREIGN KEY (fkUsuarioCriador) REFERENCES usuario(idUsuario)
);

-- Tabela de Questões
CREATE TABLE questao (
    idQuestao INT PRIMARY KEY AUTO_INCREMENT,
    enunciado VARCHAR(300) NOT NULL,
    alternativaA VARCHAR(150) NOT NULL,
    alternativaB VARCHAR(150) NOT NULL,
    alternativaC VARCHAR(150) NOT NULL,
    alternativaD VARCHAR(150) NOT NULL,
    alternativaCorreta ENUM('alternativaA', 'alternativaB', 'alternativaC', 'alternativaD') NOT NULL,
    categoria VARCHAR(50)
);

-- Tabela de Resultados (Respostas de Usuários por Questão)
CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkQuestao INT NOT NULL,
    respostaUsuario ENUM('alternativaA', 'alternativaB', 'alternativaC', 'alternativaD') NOT NULL,
    dataResposta DATE,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuestao) REFERENCES questao(idQuestao)
);

SELECT * FROM questao;

INSERT INTO usuario (nome, email, senha)
VALUES ('Admin', 'admin@email.com', '123456');

-- Questões sobre Velozes e Furiosos
INSERT INTO questao (enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, categoria)
VALUES 
('Qual era a profissão de Brian O''Conner no primeiro filme?', 'Mecânico', 'Piloto de corrida', 'Criminoso procurado', 'Policial infiltrado', 'alternativaD', 'Velozes e Furiosos'),

('Em qual filme Paul Walker fez sua última aparição?', 'Velozes e Furiosos 7', 'Velozes e Furiosos 6', 'Desafio em Tóquio', 'Velozes e Furiosos 8', 'alternativaA', 'Velozes e Furiosos'),

('Qual carro Dominic Toretto dirige na corrida final do primeiro filme?', 'Dodge Charger R/T 1970', 'Toyota Supra', 'Nissan Skyline', 'Ford Mustang', 'alternativaA', 'Velozes e Furiosos'),

('Quem é a irmã de Dominic Toretto?', 'Letty Ortiz', 'Mia Toretto', 'Elena Neves', 'Gisele Yashar', 'alternativaB', 'Velozes e Furiosos'),

('Em Desafio em Tóquio, quem é o protagonista?', 'Brian O’Conner', 'Han Lue', 'Dominic Toretto', 'Sean Boswell', 'alternativaD', 'Velozes e Furiosos'),

('Qual é o verdadeiro nome do personagem Han?', 'Han Park', 'Han Seoul', 'Han Kim', 'Han Lue', 'alternativaD', 'Velozes e Furiosos'),

('Qual cidade serve de cenário para a maior parte do segundo filme?', 'Tóquio', 'Miami', 'Rio de Janeiro', 'Los Angeles', 'alternativaB', 'Velozes e Furiosos'),

('Qual personagem se junta à equipe depois de ser agente da DSS?', 'Roman Pearce', 'Leon', 'Deckard Shaw', 'Luke Hobbs', 'alternativaD', 'Velozes e Furiosos'),

('Qual o lema repetido por Dominic Toretto?', 'Família', 'Liberdade', 'Corrida é vida', 'Nunca olhe para trás', 'alternativaA', 'Velozes e Furiosos'),

('Em qual filme a equipe rouba um cofre de um prédio?', 'Velozes e Furiosos 5', 'Velozes e Furiosos 7', 'Velozes e Furiosos 4', 'Velozes e Furiosos 6', 'alternativaA', 'Velozes e Furiosos'),

('Qual é o nome do carro de corrida protagonista da franquia?', 'Finn McMissile', 'Cruz Ramirez', 'Relâmpago McQueen', 'Doc Hudson', 'alternativaC', 'Carros'),

('Qual é o número do Relâmpago McQueen?', '57', '07', '10', '95', 'alternativaD', 'Carros'),

('Qual é o nome da cidade onde McQueen acaba preso no primeiro filme?', 'Spark City', 'Radiator Springs', 'Thunder Hollow', 'Motoropolis', 'alternativaB', 'Carros'),

('Quem é o melhor amigo enferrujado de McQueen?', 'Luigi', 'Guido', 'Mate', 'Fillmore', 'alternativaC', 'Carros'),

('Qual é o nome do carro azul veterano que serve de mentor para McQueen?', 'Chick Hicks', 'Doc Hudson', 'Ramone', 'Sarge', 'alternativaB', 'Carros'),

('Doc Hudson era famoso por qual título nas pistas?', 'O Fantasma Azul', 'Rei das Ruas', 'Hudson Hornet', 'Senhor Radiador', 'alternativaC', 'Carros'),

('Quem é a namorada de McQueen?', 'Cruz', 'Sally', 'Lizzie', 'Flo', 'alternativaB', 'Carros'),

('Em "Carros 2", McQueen participa de qual competição internacional?', 'Corrida das Nações', 'Copa Piston Global', 'Grand Prix Mundial', 'Corrida dos Campeões', 'alternativaC', 'Carros'),

('Qual empresa de pneus aparece em toda a série?', 'Lightyear', 'Goodyear', 'Piston Tire', 'SpeedGrip', 'alternativaA', 'Carros'),

('Quem é o carro espião britânico em "Carros 2"?', 'Chick Hicks', 'Francesco Bernoulli', 'Lewis Hamilton', 'Finn McMissile', 'alternativaD', 'Carros');






