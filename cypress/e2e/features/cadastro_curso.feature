Feature: Cadastro de Curso no Moodle

  Scenario: Realizar login e cadastrar um curso com sucesso
    Given que o usuário está na página de login
    When o usuário preenche o campo "Identificação do usuário" com "admin"
    And o usuário preenche o campo "Senha" com "sandbox24"
    And clica no botão "Acessar"
    Then o usuário altera o idioma para "Português - Brasil (pt_br)"
    When o usuário acessa o menu "Meus Cursos"
    And seleciona "Criar curso"
    And preenche o campo "Nome completo do curso"
    And preenche o campo "Nome breve do curso"
    And preenche o campo "Número de identificação do curso"
    And clica no botão "Salvar e voltar ao curso"
    Then o sistema deve redirecionar para a página do curso criado
    And o curso "Nome do curso" deve ser exibido na página
