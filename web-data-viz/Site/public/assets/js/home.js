function premier(){
    sessionStorage.setItem("fkQuiz", 1);
    window.location = '../dashboard/quiz/premier.html';
}

function laliga(){
    sessionStorage.setItem("fkQuiz", 2);
    window.location = '../dashboard/quiz/laliga.html';
}

function bundesliga(){
    sessionStorage.setItem("fkQuiz", 3);
    window.location = '../dashboard/quiz/bundesliga.html';
}

function serieA(){
    sessionStorage.setItem("fkQuiz", 4);
    window.location = '../dashboard/quiz/serieA_tim.html';
}

function brasileirao(){
    sessionStorage.setItem("fkQuiz", 5);
    window.location = '../dashboard/quiz/brasileirao.html';
}

function champions(){
    sessionStorage.setItem("fkQuiz", 6);
    window.location = '../dashboard/quiz/champions.html';
}

function worldCup(){
    sessionStorage.setItem("fkQuiz", 7);
    window.location = '../dashboard/quiz/worldCup.html';
}

function futebol(){
    sessionStorage.setItem("fkQuiz", 8);
    window.location = '../dashboard/quiz/futebol.html';
}


function premierDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Premier League");
    window.location = '../dashboard/dashs/premier.html';
}

function laligaDash() {
    sessionStorage.setItem("LIGA_ATUAL", "La Liga");
    window.location = '../dashboard/dashs/laliga.html';
}

function serieADash() {
    sessionStorage.setItem("LIGA_ATUAL", "Serie A");
    window.location = '../dashboard/dashs/serieA.html';
}

function bundesligaDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Bundesliga");
    window.location = '../dashboard/dashs/bundesliga.html';
}

function brasileiraoDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Brasileirão");
    window.location = '../dashboard/dashs/brasileirao.html';
}

function championsDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Champions League");
    window.location = '../dashboard/dashs/champions.html';
}

function worldCupDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Copa do Mundo");
    window.location = '../dashboard/dashs/worldCup.html';
}

function futebolDash() {
    sessionStorage.setItem("LIGA_ATUAL", "Futebol");
    window.location = '../dashboard/dashs/futebol.html';
}


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip');
    });
  });