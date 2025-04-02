
# Trilhas INOVA - Sistema de Inscrição e Login




## 1. O que é o projeto?
O Sistema de Inscrição e Login Trilhas INOVA é uma plataforma web desenvolvida para facilitar o processo de inscrição de candidatos em programas ou oportunidades voltados para jovens e adultos que estão iniciando na área de TI. O sistema garante um fluxo simples, intuitivo e eficiente, coletando informações essenciais dos candidatos, como nome, CPF, endereço, escolaridade e documentação obrigatória.

Além disso, o sistema inclui uma tela de login , permitindo que usuários previamente cadastrados acessem o sistema usando seu ID de usuário e senha. O objetivo é proporcionar uma experiência clara e eficiente para candidatos e avaliadores.
## 2. Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML5 : Estrutura básica da página.
- CSS3 : Estilização e responsividade do layout.
- JavaScript (Vanilla JS) : Implementação das funcionalidades interativas, como validações, formatação automática de campos e armazenamento temporário de dados.
- API ViaCEP : Integração para preenchimento automático de endereço com base no CEP fornecido pelo usuário.
- LocalStorage : Armazenamento temporário dos dados de inscrição para uso posterior.

## 3. Principais funcionalidades
O sistema inclui as seguintes funcionalidades:

Formulário de Inscrição:
- Validação de campos obrigatórios : Todos os campos do formulário são obrigatórios e exibem mensagens de erro caso não sejam preenchidos corretamente.
- Validação de e-mail : Verifica se o e-mail inserido está no formato correto (ex.: email@email.com).
- Validação de CPF : Valida o CPF e aplica automaticamente a máscara no formato 123.456.789-00.
- Formatação de telefone : Formata automaticamente o campo de telefone no formato (98) 9000000-00.
- Preenchimento automático de endereço via CEP : Utiliza a API ViaCEP para preencher automaticamente os campos de Estado, Cidade, Bairro e Rua ao inserir um CEP válido.
- Upload de arquivos : Permite anexar documentação nos formatos .jpg, .png ou .pdf.
- Armazenamento temporário de dados : Salva os dados preenchidos no localStorage, permitindo recuperação posterior.
Tela de Login:
- Autenticação simples : Verifica se o ID de usuário e senha correspondem aos dados salvos no localStorage.
- Feedback ao usuário : Exibe mensagens claras de sucesso ou erro durante o login.
- O sistema é totalmente responsivo, garantindo boa usabilidade em diferentes dispositivos (desktops, tablets e smartphones).
## Documentação

[Documentação](https://github.com/RoseVany/Trilhas/blob/main/Desafios/Desafio%2003/Documenta%C3%A7%C3%A3o.pdf)

