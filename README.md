# Google Translate API

## Descrição

Este projeto é um exemplo de como utilizar a API do Google Translate para traduzir textos, implementando um microserviço em node.js e express, usando uma implementação já criada pela comunidade e disponível no npm.

## Como rodar

Para rodar o projeto, basta clonar o repositório e rodar o comando `npm install` para instalar as dependências. Depois, basta rodar o comando `npm start` para iniciar o servidor.

## Endpoints

### `POST /translate`

Esse endpoint recebe um JSON com a seguinte estrutura:

```json
{
  "text": "Texto a ser traduzido",
  "from": "en",
  "to": "pt-br"
}
```

E retorna um JSON com a seguinte estrutura:

```json
{
  "text": "Texto traduzido"
}
```

## Criado por [Wilson Seabra](https://taprapeixe.com.br)