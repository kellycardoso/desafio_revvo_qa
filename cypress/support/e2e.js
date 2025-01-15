Cypress.on('uncaught:exception', (err, runnable) => {
    // Impede que erros inesperados quebrem o teste
    console.error('Erro capturado:', err.message);
    return false;
  });
  
  // Comando global para login
  Cypress.Commands.add('loginAsAdmin', () => {
    cy.visit('/login/index.php');
    cy.get('#username').type('admin');
    cy.get('#password').type('sandbox24');
    cy.get('#loginbtn').click();
  });
  