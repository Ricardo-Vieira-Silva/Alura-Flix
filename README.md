#AluraFlix
**AluraFlix** é um site inspirado na Netflix, desenvolvido com React, que permite aos usuários visualizar e adicionar vídeos. Este projeto utiliza um db.json como banco de dados para armazenar informações dos vídeos.

###Tecnologias Utilizadas
•	React
•	JSON Server
•	HTML5
•	CSS3
•	JavaScript

###Funcionalidades
•	Exibir vídeos de diferentes categorias
•	Adicionar novos vídeos ao banco de dados
•	Navegar entre diferentes páginas (Home, Novo Vídeo)

###Estrutura do Projeto
aluraflix/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── banner.png
│   │   └── logo.png
│   ├── componentes/
│   │   ├── Cabecalho.js
│   │   ├── Categoria.js
│   │   └── Video.js
│   ├── paginas/
│   │   ├── HomePage.js
│   │   └── NovoVideo.js
│   ├── services/
│   │   └── videoServicos.js
│   ├── styles/
│   │   ├── Cabecalho.css
│   │   ├── Categoria.css
│   │   ├── HomePage.css
│   │   └── NovoVideo.css
│   ├── App.js
│   ├── index.js
│   └── db.json
└── package.json

###Como Executar o Projeto
1.	Clone o repositório:
git clone https://github.com/seu-usuario/aluraflix.git
2.	Navegue até o diretório do projeto:
cd aluraflix
3.	Instale as dependências:
npm install
4.	Inicie o servidor JSON:
json-server --watch db.json --port 3001
5.	Inicie a aplicação React:
npm start
6.	Acesse o projeto no navegador:
http://localhost:3000

###Estrutura do db.json
{
  "videos": [
    { 
      "id": 1, 
      "titulo": "Video 1", 
      "url": "https://www.youtube.com/embed/CaTbfdsVydE?si=SlH6cSaxKzLN-2SZ", 
      "categoria": "Frontend",
      "descricao": "Descrição do Video 1"
    }
  ]
}

###Contribuição
Sinta-se à vontade para contribuir com o projeto. Você pode fazer um fork do repositório, criar uma branch para suas alterações e enviar um pull request.
1.	Faça um fork do projeto
2.	Crie uma branch para sua feature (git checkout -b minha-feature)
3.	Commit suas mudanças (git commit -m 'Adicionar minha feature')
4.	Push para a branch (git push origin minha-feature)
5.	Abra um pull request

###Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

