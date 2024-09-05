document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cepInput = document.getElementById('cep').value;
    if (validateCEP(cepInput)) {
        checkCEPInCSV(cepInput);
    } else {
        alert('CEP inválido. Por favor, insira um CEP no formato 00000-000.');
    }
});

function validateCEP(cep) {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
}

function checkCEPInCSV(cep) {
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
                alert('Atende no FLEX!', cep);
                // Adicionar lógica para quando o CEP for encontrado
            } else {
                alert('Não atende no FLEX!', cep);
                // Adicionar lógica para quando o CEP não for encontrado
            }
        })
        .catch(error => {
            console.error('Erro ao processar o arquivo CSV:', error);
        });
}
