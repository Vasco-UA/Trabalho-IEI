Projeto IEI 01 - Static Website with NGINX and Varnish
Descrição
Este projeto demonstra uma arquitetura Docker Compose composta por:

NGINX Web Server
Varnish Cache
Rede Docker interna
Website estático HTML/CSS/JavaScript
A aplicação disponibiliza uma página web através do Varnish, que atua como camada de cache à frente do servidor NGINX.

Arquitetura
Browser
   |
Varnish Cache
   |
NGINX Web Server
   |
Static Website
Tecnologias Utilizadas
Docker
Docker Compose
NGINX
Varnish
HTML
CSS
JavaScript
Estrutura do Projeto
.
├── docker-compose.yml
├── README.md
├── varnish
│   └── default.vcl
└── website
    ├── index.html
    ├── style.css
    └── script.js
Como Executar
Iniciar os contentores:

docker compose up -d
Verificar os contentores:

docker ps
Parar os contentores:

docker compose down
Acesso
Abrir no navegador:

http://localhost:8080
Rede Docker
O projeto cria automaticamente uma rede interna:

projeto-iei-01_internal
Esta rede permite a comunicação entre o Varnish e o NGINX.

Serviços
Web Server
Imagem: nginx:latest
Porta interna: 80
Cache
Imagem: varnish:stable
Porta externa: 8080
Autor
Vasco