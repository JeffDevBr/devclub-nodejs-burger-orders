# API de Gerenciamento de Pedidos

Este projeto é uma API desenvolvida com Node.js e Express para gerenciar pedidos. A aplicação permite criar, listar, atualizar e deletar pedidos, além de alterar o status de preparação dos mesmos.

## Funcionalidades

- Criação de novos pedidos
- Listagem de todos os pedidos
- Obtenção de detalhes de um pedido específico
- Atualização de informações de pedidos
- Exclusão de pedidos
- Atualização do status de preparação do pedido

## Tecnologias Utilizadas

- Node.js
- Express.js

## Rotas

- `POST /order`: Cria um novo pedido
- `GET /order`: Lista todos os pedidos
- `GET /order/:id`: Retorna um pedido específico
- `PUT /order/:id`: Atualiza um pedido existente
- `DELETE /order/:id`: Remove um pedido
- `PATCH /order/:id`: Atualiza o status do pedido para "Pronto"
