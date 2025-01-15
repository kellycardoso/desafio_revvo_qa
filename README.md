# Projeto Cypress com BDD (Cucumber)

Este projeto implementa testes automatizados utilizando **Cypress** e **Cucumber (BDD)**, seguindo boas práticas de desenvolvimento e integração contínua. Os testes cobrem cenários do ambiente Moodle Sandbox.

## Objetivo
Automatizar fluxos de teste relacionados a login, alteração de idioma e criação de cursos na plataforma Moodle, garantindo a qualidade e funcionalidade do sistema.

---

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de automação de testes.
- [Cucumber](https://cucumber.io/) - Ferramenta BDD para especificação e execução de cenários.
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - Plugin para integração do Cucumber com Cypress.
- [Faker.js](https://fakerjs.dev/) - Geração de dados aleatórios para testes.

---

## Pré-requisitos
- **Node.js** (versão LTS recomendada: 16 ou superior)
- **NPM** ou **Yarn** para gerenciar pacotes

---

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `cypress.env.json` para variáveis sensíveis, como usuário e senha:
   ```json
   {
     "BASE_URL": "https://sandbox.moodledemo.net",
     "USERNAME": "admin",
     "PASSWORD": "sandbox24"
   }
   ```



## Como Executar os Testes

### Abrir o Test Runner
Para executar os testes interativamente:
```bash
npx cypress open
```

### Executar os Testes no Modo Headless
Para rodar os testes em modo headless:
```bash
npx cypress run
```

---

## Funcionalidades Implementadas

### Cenários de Teste

#### 1. Login
- **Cenário Feliz**: Login com credenciais válidas.
- **Cenário de Erro**: Login com credenciais inválidas.

#### 2. Alterar Idioma
- **Cenário Feliz**: Alteração do idioma para "Português-Brasil (pt-br)".


#### 3. Criar Curso
- **Cenário Feliz**: Criação de um curso com nome e número de identificação válidos.
  
---

## Geração de Dados Aleatórios
Utilizamos `faker-js` para criar valores dinâmicos durante os testes, como nomes de cursos ou identificadores únicos.

Exemplo:
```javascript
import { faker } from "@faker-js/faker";

const courseName = `Curso ${faker.company.name()}`;
const courseId = faker.random.numeric(6);
```

---

## Prints de Evidência
Os prints de evidência são gerados automaticamente e salvos em:
```
cypress/screenshots
```

Para capturar prints durante os testes:
```javascript
cy.screenshot('nome-arquivo');
```

---

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Criação
Kelly Goudinho Cardoso
