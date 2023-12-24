# Stardoll Voting Automation

## Overview

This project utilizes the Selenium WebDriver to automate the process of voting on Stardoll, a popular online fashion and dress-up game. The script is designed to perform several actions, including logging in, navigating to the design page, scrolling to the bottom, accessing the favorites, and voting ten times in succession.

## Prerequisites

Before running the script, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Google Chrome](https://www.google.com/chrome/)

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run the following command to install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and provide your Stardoll login credentials:

   ```env
   LOGIN=your_username
   PASSWORD=your_password
   ```

## Running the Script

Execute the following command to run the script:

```bash
node server.js
```

This will launch the Selenium WebDriver, navigate to Stardoll, and perform the automated voting process.

## Code Organization

- **server.js**: Main script file containing the automation logic.
- **.env**: Configuration file for storing sensitive data, such as login credentials.
- **node_modules/**: Directory containing Node.js dependencies.
- **package.json**: Configuration file for npm packages and scripts.

## Technologies Used

- **Selenium WebDriver**: Used for automating web browser interactions.
- **Node.js**: JavaScript runtime environment.
- **dotenv**: Library for loading environment variables from a `.env` file.

## Script Architecture

The script is organized into several functions, each responsible for a specific action:

- `login`: Initiates the login process by clicking the login button and entering credentials.
- `navigateToDesignPage`: Navigates to the design page within Stardoll.
- `scrollToBottom`: Scrolls to the bottom of the page to reveal additional content.
- `navigateToFavorites`: Accesses the favorites section.
- `voteTenTimes`: Performs the voting action ten times in succession.

The main function, `StardollVote`, orchestrates these actions in a sequential manner.

---

# Stardoll Voting Automation (Portuguese)

## Visão Geral

Este projeto utiliza o Selenium WebDriver para automatizar o processo de votação no Stardoll, um popular jogo online de moda e vestir. O script é projetado para realizar várias ações, incluindo login, navegação até a página de design, rolar até o final, acessar os favoritos e votar dez vezes consecutivas.

## Pré-requisitos

Antes de executar o script, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Google Chrome](https://www.google.com/chrome/)

## Configuração

1. Clone este repositório para a sua máquina local.
2. Navegue até o diretório do projeto usando o terminal.
3. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e forneça suas credenciais de login do Stardoll:

   ```env
   LOGIN=seu_nome_de_usuário
   PASSWORD=sua_senha
   ```

## Executando o Script

Execute o seguinte comando para executar o script:

```bash
node server.js
```

Isso iniciará o Selenium WebDriver, navegará até o Stardoll e executará o processo automatizado de votação.

## Organização do Código

- **server.js**: Arquivo principal do script contendo a lógica de automação.
- **.env**: Arquivo de configuração para armazenar dados sensíveis, como credenciais de login.
- **node_modules/**: Diretório contendo as dependências do Node.js.
- **package.json**: Arquivo de configuração para pacotes e scripts npm.

## Tecnologias Utilizadas

- **Selenium WebDriver**: Usado para automatizar interações no navegador web.
- **Node.js**: Ambiente de execução JavaScript.
- **dotenv**: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.

## Arquitetura do Script

O script é organizado em várias funções, cada uma responsável por uma ação específica:

- `login`: Inicia o processo de login clicando no botão de login e inserindo credenciais.
- `navigateToDesignPage`: Navega até a página de design no Stardoll.
- `scrollToBottom`: Rola até o final da página para revelar conteúdo adicional.
- `navigateToFavorites`: Acessa a seção de favoritos.
- `voteTenTimes`: Realiza a ação de votação dez vezes consecutivas.

A função principal, `StardollVote`, orquestra essas ações de maneira sequencial.
