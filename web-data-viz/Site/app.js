// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
const { GoogleGenAI } = require("@google/genai");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

const chatIA = new GoogleGenAI({ apiKey: process.env.MINHA_CHAVE });

var quizRouter = require("./src/routes/quiz");
var usuarioRouter = require("./src/routes/usuarios");
var graficoRouter = require("./src/routes/grafico");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/quiz", quizRouter);
app.use("/usuarios", usuarioRouter);
app.use("/grafico", graficoRouter);

app.listen(PORTA_APP, function () {
    console.log(`
                #######  ##    ##  ######  ####       ##     ######     ##               
                ##       ##    ##    ##    ## ##     ####      ##      ####               
                ##       ##    ##    ##    ##  ##   ##  ##     ##     ##  ##               
                ## # ##  ##    ##    ##    ##  ##   ######     ##     ######          
                ##       ##    ##    ##    ##  ##   ##  ##     ##     ##  ##                 
                ##       ##    ##    ##    ## ##    ##  ##     ##     ##  ##            
                ##       ########    ##    ####     ##  ##     ##     ##  ##              
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});

app.post("/perguntar", async (req, res) => {
    const timeBr = req.body.timeBr;
    const timeEuropeu = req.body.timeEuropeu;
    const anoQueComecou = req.body.anoQueComecou;

    try {
        const resultado = await gerarResposta(timeBr, timeEuropeu, anoQueComecou);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

async function gerarResposta(timeBr, timeEuropeu, anoQueComecou) {
    try {
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `
            Em tópicos de no máximo duas linhas conte três curiosidades sobre: ${timeBr},
            Em tópicos de no máximo duas linhas conte três curiosidades sobre: ${timeEuropeu},
            Em tópicos de no máximo duas linhas conte três curiosidades do futebol no ano: ${anoQueComecou}.
            `
        });

        const resposta = (await modeloIA).text;

        const respostaTratada = resposta
        // Remove títulos com ## (como ## Corinthians:)
        .replace(/^##\s.*$/gmi, '')
        // Remove negritos markdown (ex: **texto**)
        .replace(/\*\*(.*?)\*\*/g, '$1')
        // Remove quebras de linha excessivas
        .replace(/\n{2,}/g, '\n\n')
        .trim();

        const tokens = (await modeloIA).usageMetadata;

        console.log(respostaTratada);
        console.log("Uso de Tokens:", tokens);

        return respostaTratada;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
