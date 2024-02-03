## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar dois containers de MySQL um para usar a api e o outro é utilizado nos testes. Você poderá acessar via localhost:3306 e a senha do usuário **root** deve ser setada no arquivo `.env`.

### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
    ou
    yarn start

### Para rodar os testes basta executar o seguinte comando:

    npm test
    ou
    yarn test

### Para acessar a documentação da api, acesse [Doc](http://localhost:4568/doc):

Obrigado pela oportunidade =)
