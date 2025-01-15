 Feature: Login na plataforma Moodle
 
Scenario: Login com credenciais inválidas

 Given que o usuário está na página de login
 When o usuário preenche o campo "Identificação do usuário" com "admin"
 And o usuário preenche o campo "Senha" com "password123"
 And clica no botão "Acessar"
 Then o sistema deve redirecionar o usuário para a página inicial

  
