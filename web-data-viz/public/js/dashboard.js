const idUsuario = sessionStorage.getItem('ID_USUARIO');
    


fetch(`/dashboard/buscarMaiorPontuacao/${idUsuario}`)
  .then(response => response.json())
  .then(data => {
    const MaxPontuacao = data[0]?.['Pontuacao'] || 0;
    document.getElementById('MaxPontuacao').innerText = parseFloat(MaxPontuacao);
  })
  .catch(error => console.error('Erro ao buscar média de pontuação:', error));

  fetch(`/dashboard/buscarMenorPontuacao/${idUsuario}`)
  .then(response => response.json())
  .then(data => {
    const minValor = data[0]?.['Erradas'] || 0;
    document.getElementById('minValor').innerText = parseFloat(minValor)
  })
  .catch(error => console.error('Erro ao buscar menor pontuação:', error));

fetch('/dashboard/buscarUsuariosPontuacoes', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    const Usuario = data.map(item => item.nome || item["Usuário"]);
    const pontuacoes = data.map(item => item.pontos || item["Pontuação"]);

    const chartData = {
      labels: Usuario,
      datasets: [{ 
        label: 'Pontuação dos Usuários', 
        data: pontuacoes, 
        backgroundColor: '#541C5D',
        color: '#000' }],
    };

    new Chart(document.getElementById('grafico1'), { type: 'bar', data: chartData });
  })
  .catch(error => console.error('Erro ao buscar pontuação dos Usuarios:', error));



fetch(`/dash/buscarMediaPontuacao`)
  .then(res => res.json())
  .then(data => {
    const media = data.Média ? parseFloat(data.Média).toFixed(2) : '0.00';
    document.getElementById('pontuacaoMediaUsuario').innerHTML = `${media}`;
  })
  .catch(err => console.error('Erro ao buscar média de pontuação:', err));