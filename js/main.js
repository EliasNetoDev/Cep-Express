document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let cepInput = document.getElementById('cep').value;

    // Remove tudo que não é número para verificação
    const cleanCEP = cepInput.replace(/\D/g, '');
    
    // Verifica se o CEP tem 8 dígitos
    if (cleanCEP.length !== 8) {
        alert('Por favor, insira um CEP com 8 dígitos.');
        return;
    }

    // Formata o CEP para exibição com hífen
    cepInput = formatCEP(cepInput);
    document.getElementById('cep').value = cepInput;

    checkCEPInCSV(cepInput);
});

function formatCEP(cep) {
    // Remove qualquer coisa que não seja número
    const cleanCEP = cep.replace(/\D/g, '');
    // Adiciona o hífen no CEP formatado
    return cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2');
}

function checkCEPInCSV(cep) {
    // Remove o hífen para a busca no CSV
    const formattedCEP = cep.replace('-', '');

    fetch('../data/ceps.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo CSV');
            }
            return response.text();
        })
        .then(data => {
            // Processa o conteúdo do CSV
            const lines = data.split('\n');
            // Remove possíveis linhas vazias
            const cleanLines = lines.filter(line => line.trim() !== '');

            let cepFound = false;
            for (let i = 0; i < cleanLines.length; i++) {
                const csvCEP = cleanLines[i].trim();
                if (csvCEP === formattedCEP) {
                    cepFound = true;
                    break;
                }
            }

            if (cepFound) {
                alert('Atende no FLEX!');
                // Adicionar lógica para quando o CEP for encontrado
            } else {
                alert('Não atende no FLEX!');
                // Adicionar lógica para quando o CEP não for encontrado
            }
        })
        .catch(error => {
            console.error('Erro ao processar o arquivo CSV:', error);
        });
}
