<h1 align="center">
	foodExplorerBack-end
</h1>

<h3 align="center">
	A aplicação desenvolvida é um cardápio digital para um restaurante fictício, conhecido como foodExplorer.
</h3>

<h4 align="center">
	Status: 🚧 In Construction
</h4>

<p align="center">
	<a href="#about">About</a> •
	<a href="#tech-stack">Tech Stack</a> •
	<a href="#installation">Installation</a> •
	<a href="#usage">Usage</a> • 
	<a href="#contact">Contact</a> 
</p>

## About

Critérios de avaliação.

Atende a todas as especificações descritas

✔️ Um arquivo README.md com as especificações sobre como executar o projeto em um ambiente dev.

⌛ Os usuários deverão se autenticar para entrar na aplicação através da tela de login, você pode aplicar o que aprendeu nas aulas de autenticação JWT. A autenticação deve ser validada com senha.

⌛ O admin irá fazer upload de imagens para cadastrar os pratos.

✔️ Dê nomes significativos para as suas funções e variáveis: trabalhe um pouco com os conceitos do Clean Code.

✔️ Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.

## Tech Stack

<img src="https://img.shields.io/badge/Nodejs-05122A?style=flat&logo=node.js" alt="nodejs Badge" height="25">&nbsp;
<img src="https://img.shields.io/badge/React-05122A?style=flat&logo=react" alt="react Badge" height="25">&nbsp;

## Usage

To use this project, follow the steps above:

$ npm install

$ npx knex migrate:latest

$ npx knex seed:run

// rodar o servidor
$ npm run dev

# Admin login

$ email: admin@email.com
$ password: 090807

Documentação:

http://localhost:3333/user
http://localhost:3333/carts
http://localhost:3333/sessions

Faça uma requisição Post para http://localhost:3333/sessions passando email: admin@email.com e password: 090807 para recuperar o token de acesso

Apos isso o token sera enviar o token_bearer no header de autenticaçao.

Link do Deploy aplicação completa:
https://foodexplorerfinal.netlify.app/
