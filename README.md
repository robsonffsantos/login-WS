# Projeto de Autenticação com React e Tailwind CSS

## Link do site: http://loginWS.surge.sh

## Descrição

Este projeto é uma aplicação web de autenticação desenvolvida com **React**, **TypeScript** e **Tailwind CSS**. A aplicação permite que usuários realizem login, se registrem e acessem uma página inicial protegida. Além disso, oferece suporte para troca de idioma entre **Português (PT-BR)** e **Inglês (EN-US)**.

### Funcionalidades

- **Tela de Login:** 
  - Campos para email e senha.
  - Validação dos dados de entrada.
  - Redirecionamento para a tela inicial após o login bem-sucedido.
  
- **Tela de Registro:**
  - Campos para nome, email e senha.
  - Validação robusta de email e senha, incluindo requisitos de complexidade para a senha.
  - Redirecionamento para a tela de login após o registro.

- **Tela Inicial:** 
  - Exibição de uma mensagem personalizada de boas-vindas com o nome do usuário.
  - Botão para realizar logout.

- **Troca de Idioma:**
  - Seletor de idioma para alternar entre **PT-BR** e **EN-US**.
  - Tradução dinâmica das mensagens na interface.

- **Persistência de Dados:**
  - Dados de autenticação são armazenados no local storage e persistem por 1 dia.

## Tecnologias Utilizadas

- **React:** Biblioteca para construir interfaces de usuário interativas.
- **TypeScript:** Superset do JavaScript que adiciona tipos estáticos, aumentando a segurança e a manutenibilidade do código.
- **Tailwind CSS:** Framework CSS utilitário que proporciona uma abordagem rápida e eficiente para estilizar a aplicação.
- **Formik & Yup:** Bibliotecas para gerenciamento e validação de formulários, facilitando a manipulação de entradas do usuário.
- **React Router:** Biblioteca para navegação e roteamento dentro da aplicação.

## Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/robsonffsantos/login-WS.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd login-WS
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5. **Abra o navegador e acesse:**

    ```plaintext
    http://localhost:3001
    ```

## Estrutura do Projeto

- `src/`
  - `components/`: Componentes reutilizáveis da aplicação.
  - `context/`: Contextos do React para gerenciamento de estado (incluindo autenticação e idioma).
  - `pages/`: Páginas da aplicação (Login, Registro, Home).
  - `i18n/`: Arquivos de tradução para suporte a múltiplos idiomas.
  - `App.tsx`: Componente principal da aplicação.
  - `main.tsx`: Ponto de entrada da aplicação.

## Capturas de Tela

<img src="https://github.com/user-attachments/assets/bbd7052b-0a54-4aad-9d7b-f0f9690a956f" alt="Login Page" width="300"/>
<img src="https://github.com/user-attachments/assets/a90b2dd4-17e3-431c-9545-740c6d8e8714" alt="Register Page" width="300"/>
<img src="https://github.com/user-attachments/assets/61fc285f-f56d-46a0-a0c1-a8570afaa8af" alt="Home Page" width="300"/>

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:
- **LinkedIn:** [Robson Fernando](https://www.linkedin.com/in/robsonffdossantos/?locale=pt_BR)
