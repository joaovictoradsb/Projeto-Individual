const idUsuario = sessionStorage.getItem('ID_USUARIO');
    


fetch(`/dashboard/buscarMaiorPontuacao/${idUsuario}`)
  .then(response => response.json())
  .then(data => {
    const MaxPontuacao = data[0]?.['pontuacao'] || 0;
    document.getElementById('MaxPontuacao').innerText = parseFloat(MaxPontuacao);
  })
  .catch(error => console.error('Erro ao buscar média de pontuação:', error));

  fetch(`/dashboard/buscarMenorPontuacao/${idUsuario}`)
  .then(response => response.json())
  .then(data => {
    const minValor = data[0]?.['erradas'] || 0;
    document.getElementById('minValor').innerText = parseFloat(minValor)
  })
  .catch(error => console.error('Erro ao buscar menor pontuação:', error));

// fetch('/dashboard/buscarUsuariosPontuacoes', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const Usuario = data.map(item => item.nome || item["Usuário"]);
//     const pontuacoes = data.map(item => item.pontos || item["Pontuação"]);

//     const chartData = {
//       labels: Usuario,
//       datasets: [{ 
//         label: 'Pontuação dos Usuários', 
//         data: pontuacoes, 
//         backgroundColor: '#541C5D',
//         color: '#000' }],
//     };

//     new Chart(document.getElementById('grafico1'), { type: 'bar', data: chartData });
//   })
//   .catch(error => console.error('Erro ao buscar pontuação dos Usuarios:', error));


fetch(`/dashboard/buscarMediaPontuacao`)
  .then(res => res.json())
  .then(data => {
    const media = data.média ? parseFloat(data.média).toFixed(2) : 0;
    const porcentagem = (media / 20 * 100).toFixed(2);

   
    // Geração do gráfico de pizza
    const ctx = document.getElementById('grafico_pizza').getContext('2d');

    const dataPizza = {
      labels: ['Acertos (%)', 'Erros (%)'],
      datasets: [{
        label: 'Desempenho',
        data: [porcentagem, 100 - porcentagem],
        backgroundColor: [
          'rgb(75, 192, 192)', // verde-azulado
          'rgb(255, 99, 132)'  // vermelho
        ],
        hoverOffset: 10
      }]
    };

    const configPizza = {
      type: 'pie',
      data: dataPizza
    };

    new Chart(ctx, configPizza);
  })
  .catch(err => console.error('Erro ao buscar média de pontuação:', err));

  

  fetch(`/dashboard/buscarTentativasPorUsuario/${idUsuario}`)
  .then(res => res.json())
  .then(dados => {
    const corpoTabela = document.querySelector('#tabelaTentativas tbody');
    corpoTabela.innerHTML = ''; // Limpa a tabela antes de popular

    dados.forEach(tentativa => {
      const linha = document.createElement('tr');

      const acertos = document.createElement('td');
      acertos.textContent = tentativa.pontuacao;

      const erros = document.createElement('td');
      erros.textContent = tentativa.erradas;

      const data = document.createElement('td');
      const dataFormatada = new Date(tentativa.dtpontuacao).toLocaleString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
      data.textContent = dataFormatada;

      linha.appendChild(acertos);
      linha.appendChild(erros);
      linha.appendChild(data);

      corpoTabela.appendChild(linha);
    });
  })
  .catch(err => {
    console.error('Erro ao buscar tentativas do usuário:', err);
  });