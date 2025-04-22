# Feed Front

Feed Front é uma aplicação web desenvolvida em Next.js que permite aos usuários criar contas, autenticar-se, criar posts e interagir com curtidas. O projeto foi idealizado para proporcionar uma experiência moderna de rede social, com foco em usabilidade, performance e escalabilidade. O frontend consome uma API local, facilitando o desenvolvimento e integração com o backend.

## Funcionalidades

- Cadastro e autenticação de usuários
- Criação, edição e exclusão de posts
- Sistema de curtidas em posts
- Interface responsiva e intuitiva
- Integração com API local para persistência dos dados

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/) para requisições HTTP
- [Phosphor Icons](https://phosphoricons.com/) para estilização
- [Next auth](https://next-auth.js.org/) para autenticação

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- API backend rodando localmente (consulte a documentação do backend para instruções)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/feed-front.git
cd feed-front
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

## Configuração

Crie um arquivo `.env.local` na raiz do projeto e defina a URL da API backend:

```env
NEXT_PUBLIC_API_URL=http://localhost:4568
```

> Ajuste a porta conforme a configuração do seu backend.

## Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a versão de produção
- `start`: Inicia o servidor em modo produção

## Estrutura de Pastas

```
feed-front/
├── components/
├── pages/
├── hooks/
├── styles/
├── lib/
└── ...
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.



