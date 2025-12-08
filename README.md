# Node.js API com Autenticação JWT

Uma API simples em Node.js com autenticação de usuários usando JWT e bcrypt.

## Instalação

```bash
npm install
npm start
```

## Autenticação com JWT

Registrar novo usuário (POST)

```bash
curl -X POST http://localhost:3000/users/register -H "Content-Type: application/json" -d "{\"email\":\"joao@example.com\",\"password\":\"senha123\",\"name\":\"João Silva\"}"
```

Resposta esperada:
```Resposta:
{
  "message": "Usuário registrado com sucesso",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "createdAt": "2025-12-08T..."
  }
}
```

## Fazer login (POST)

```bash
curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d "{\"email\":\"joao@example.com\",\"password\":\"senha123\"}"
```

Resposta esperada:
```Resposta:
{
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  }
}
```

##  Copie o token para usar nas rotas protegidas

Acessar perfil (GET - Protegido)
```bash
curl -X GET http://localhost:3000/users/profile -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

Resposta esperada:
```Resposta:
{
  "message": "Perfil do usuário",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "createdAt": "2025-12-08T..."
  }
}
```

## Tecnologias Utilizadas

- Express.js - Framework web
- bcryptjs - Criptografia de senhas
- jsonwebtoken - Geração e validação de JWT
- Mongoose - ODM para MongoDB (preparado para uso)

