const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

function redirecionar(botao) {
    if (botao === 'rastrear-ip') {
        window.location.href = 'rastrear_ip.html';
    } else if (botao === 'ouvir-musica') {
        window.location.href = 'not.html';
    } else if (botao === 'exportar-youtube') {
        window.location.href = 'vingadores.html';
    }
}

// Função para limpar a tela após 10 segundos
function limparTela() {
    locationResult.innerHTML = ''; // Limpa o conteúdo da div de resultado
}

// Agende a limpeza da tela após 10 segundos
setTimeout(limparTela, 10000); // 10 segundos em milissegundos

// Função para mostrar mensagem de status
// ... (seu código anterior)

// Função para mostrar mensagem de status
function mostrarMensagemStatus(mensagem) {
    const resultadoRastreamento = document.getElementById('resultado-rastreamento');
    resultadoRastreamento.innerHTML = `<p class="status-message">${mensagem}</p>`;
}

// Função para mostrar resultado
function mostrarResultado(resultado) {
    const resultadoRastreamento = document.getElementById('resultado-rastreamento');
    resultadoRastreamento.innerHTML = `
        <p class="result-message">Esse é o resultado:</p>
        <p>${resultado}</p>
    `;
}

/* gleego */
// JavaScript para redirecionar para o arquivo index.html
