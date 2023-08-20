# Food Explorer 

Bem-vindo ao Food Explorer, um projeto que combina a paixão pela comida com a inovação tecnológica. Nossa aplicação backend é um e-commerce voltado para pedidos e vendas de pratos deliciosos. Desenvolvido com Node.js, Express, SQLite, Knex, Multer e Jest, o Food Explorer oferece uma plataforma robusta para gerenciar pratos, processar pedidos e autenticar usuários.

## Acesso à Aplicação

A aplicação está implantada em um ambiente de produção e o acesso pode ser obtido da seguinte forma:

### Ambiente de Produção

O ambiente de produção contém dados já inseridos e está disponível em: [https://foodexplorer-api-mscd.onrender.com](https://foodexplorer-api-mscd.onrender.com)

**Usuário Admin:**
- Email: admin@email.com
- Senha: 123

**Usuários Cadastrados:**
1. Email: user@email.com / Senha: abcdef
2. Email: bruna@email.com / Senha: 123456
3. Email: teste@email.com / Senha: 123456


## Funcionalidades Principais

A Food Explorer oferece as seguintes funcionalidades principais:

-   Cadastro e autenticação de usuários com diferentes níveis de acesso.
-   Gerenciamento de pratos, incluindo criação, atualização e remoção de itens do catálogo.
-   Processamento de pedidos de pratos pelos clientes.
-   Upload de imagens dos pratos utilizando o Multer.


## Instalação e Execução

Para executar a API localmente, siga os passos abaixo:

1. Clone o repositório para sua máquina local.

2. Navegue até a pasta do projeto no terminal.

3. Instale as dependências do projeto utilizando o npm:

```bash
npm install
```
4. Adicione a senha criptografada do admin no arquivo .env:
   
```bash
   ADMIN_PASSWORD=$2a$08$eu1sJWVZPuBqBW5dNo2A/.D7lWkOBLRWamkfJjX7I.Kl6WiAZIbva
```
5. Execute as migrações para criar as tabelas do banco de dados:

```bash
npm run migrate
```
6. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Considerações Finais

A aplicação Food Explorer é um projeto desenvolvido como parte do meu aprendizado em desenvolvimento web, sendo este o desafio final proposto pelo curso Explorer da Rocketseat. Sinta-se à vontade para explorar o código-fonte e fornecer feedback. Espero que essa aplicação possa ser útil como referência ou como base para projetos futuros.

Se tiver alguma dúvida ou precisar de ajuda, fique à vontade para entrar em contato comigo através do email: brunaporato@gmail.com.

Obrigada por acessar a aplicação Food Explorer!


## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).


## 🚀 Sobre mim

Eu sou uma entusiasta da tecnologia e apaixonada por programação. Meu objetivo é explorar o vasto mundo do desenvolvimento web e criar soluções inovadoras que impactem positivamente a vida das pessoas. Aprendo constantemente, busco desafios e estou sempre ansiosa para mergulhar em novos projetos emocionantes. Conectar pessoas e ideias através da tecnologia é o que me motiva a crescer como profissional e como pessoa.

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunaporato/)

## Author

-   [@BrunaPorato](https://www.github.com/brunaporato)
