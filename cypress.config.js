const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configura o cypress-cucumber-preprocessor
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());

      // Retorna a configuração (necessário para alguns plugins)
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature", // Suporta arquivos em subpastas
    supportFile: "cypress/support/e2e.js", // Habilite o arquivo de suporte se necessário
    baseUrl: "https://sandbox.moodledemo.net", // Base URL para evitar repetir em testes
    defaultCommandTimeout: 10000, // Aumenta o timeout para comandos padrão
  },
});
