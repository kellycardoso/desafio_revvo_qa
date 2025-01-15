
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given("que o usuário está na página de login", () => {
  cy.visit("/login/index.php"); // Acessa a página de login
});

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


When("o usuário altera o idioma para {string}", (idioma) => {
  // 1. Abrir o menu de usuário (dependendo de como o Moodle está estruturado, isso pode variar)
  cy.get("#user-menu-toggle")  // Acessa o menu do usuário
    .click();                      // Abre o menu de opções do usuário

  cy.contains('a', 'Language').click(); // Abre o menu de idiomas
  
  
  cy.get('a[href="https://sandbox.moodledemo.net/?lang=pt_br"]').click();
  
});



When("o usuário acessa o menu {string}", (menu) => {
   cy.get('li a[href="https://sandbox.moodledemo.net/my/courses.php"]').click();
});

When("navega para a aba {string}", (aba) => {
  cy.contains(aba).click();
});

When("seleciona {string}", (opcao) => {
  cy.contains(opcao).click();
});

let randomId = Cypress._.random(100000, 999999); // Gera um número aleatório de 6 dígitos
let randomSuffix = Cypress._.random(1, 100);    // Gera um número de 1 a 100 para usar no nome
let courseName = `Desafio Revvo QA${randomSuffix}`;
let shortName = `Revvo QA${randomSuffix}`;

When("preenche o campo {string}", (campo) => {
  if (campo === "Nome breve do curso") {
    cy.get("#id_shortname").type(shortName);
  } else 
  if (campo === "Nome completo do curso") {
    cy.get("#id_fullname").type(courseName);
  } else if (campo === "Número de identificação do curso") {
    cy.get("#id_idnumber").type(randomId);
  }
});


Then("o sistema deve redirecionar para a página do curso criado", () => {
  cy.url().should("include", "/course/view.php");
});

Then("o curso {string} deve ser exibido na página", (curso) => {
  // cy.contains(curso).should('exist');
  cy.contains(courseName).should("be.visible");
  cy.screenshot('nome-curso-salvo'); // Captura o estado da página
});

