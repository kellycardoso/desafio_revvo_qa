
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given("que o usuário está na página de login", () => {
  cy.visit("/login/index.php"); });

When("o usuário preenche o campo {string} com {string}", (campo, valor) => {
  if (campo === "Identificação do usuário") {
    cy.get("#username").type(valor);
  } else if (campo === "Senha") {
    cy.get("#password").type(valor);
  }
});

When("clica no botão {string}", (botao) => {
  if (botao === "Acessar") {
    cy.get("#loginbtn").click();
  } else if (botao === "Salvar e voltar ao curso") {
    cy.get("#id_saveanddisplay").click();
  }
});


Then("o sistema deve redirecionar o usuário para a página inicial", () => {
  cy.contains('https://sandbox.moodledemo.net/somepage').screenshot('url-visible');
 });