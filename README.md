
Projeto de Autenticação com React e Tailwind CSS
Descrição
Este projeto é uma aplicação web de autenticação desenvolvida com React, TypeScript e Tailwind CSS. A aplicação permite que usuários realizem login, se registrem e acessem uma página inicial protegida. Além disso, oferece suporte para troca de idioma entre Português (PT-BR) e Inglês (EN-US).

Funcionalidades
Tela de Login:

Campos para email e senha.
Validação dos dados de entrada.
Redirecionamento para a tela inicial após o login bem-sucedido.
Tela de Registro:

Campos para nome, email e senha.
Validação robusta de email e senha, incluindo requisitos de complexidade para a senha.
Redirecionamento para a tela de login após o registro.
Tela Inicial:

Exibição de uma mensagem personalizada de boas-vindas com o nome do usuário.
Botão para realizar logout.
Troca de Idioma:

Seletor de idioma para alternar entre PT-BR e EN-US.
Tradução dinâmica das mensagens na interface.
Persistência de Dados:

Dados de autenticação são armazenados no local storage e persistem por 1 dia.
Tecnologias Utilizadas
React: Biblioteca para construir interfaces de usuário interativas.
TypeScript: Superset do JavaScript que adiciona tipos estáticos, aumentando a segurança e a manutenibilidade do código.
Tailwind CSS: Framework CSS utilitário que proporciona uma abordagem rápida e eficiente para estilizar a aplicação.
Formik & Yup: Bibliotecas para gerenciamento e validação de formulários, facilitando a manipulação de entradas do usuário.
React Router: Biblioteca para navegação e roteamento dentro da aplicação.
Instalação e Execução
Para executar o projeto localmente, siga os passos abaixo:

Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
Copiar código
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Abra o navegador e acesse:

arduino
Copiar código
http://localhost:3000
Estrutura do Projeto
src/
components/: Componentes reutilizáveis da aplicação.
context/: Contextos do React para gerenciamento de estado (incluindo autenticação e idioma).
pages/: Páginas da aplicação (Login, Registro, Home).
i18n/: Arquivos de tradução para suporte a múltiplos idiomas.
App.tsx: Componente principal da aplicação.
main.tsx: Ponto de entrada da aplicação.
Capturas de Tela



Contribuições
Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga estas etapas:

Faça um fork deste repositório.
Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
Faça suas alterações e commit (git commit -am 'Adiciona nova funcionalidade').
Faça push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.
Contato
Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

Nome: Robson Fernando Ferreira dos Santos
E-mail: seuemail@example.com
LinkedIn: Seu Perfil