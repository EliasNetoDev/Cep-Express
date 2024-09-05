module.exports = {
  // Tipos de commit disponíveis
  types: [
    { value: 'feat', name: '✨ feat: Uma nova funcionalidade' },
    { value: 'fix', name: '🐛 fix: Correção de um bug' },
    { value: 'chore', name: '🧹 chore: Alterações no processo de build ou ferramentas auxiliares' },
    { value: 'docs', name: '📚 docs: Mudanças apenas na documentação' },
    { value: 'style', name: '💄 style: Alterações que não afetam o significado do código (formatação, ponto e vírgula, etc.)' },
    { value: 'refactor', name: '♻️ refactor: Uma alteração no código que não corrige um bug nem adiciona uma nova funcionalidade' },
    { value: 'perf', name: '🚀 perf: Uma alteração no código que melhora o desempenho' },
    { value: 'config', name: '🔧 config: Arquivos e scripts de configuração' },
    { value: 'test', name: '✅ test: Adição de testes ausentes ou correção de testes existentes' }
  ],
  // Remover escopos
  scopes: [], // Não utiliza scopos
  allowCustomScopes: false, // Impede escopos personalizados
  allowBreakingChanges: ['feat', 'fix'], // Tipos que podem incluir alterações quebradoras
  subjectLimit: 100,
  breaklineNumber: 1000,
  footerPrefix: 'ISSUES CLOSED:',
};
