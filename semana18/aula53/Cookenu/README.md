# COOKENU 👩‍🍳🍰

<h4 align='center'>
👉 Status: Concluído ✅👏
</h4>
<hr />

### ✨ Funcionalidades:

- [x] Signup
- [x] Login
- [x] Pegar próprio perfil
- [X] Pegar perfil de outro usuário
- [X] Criar receita
- [X] Pegar receita
    - 🌟 DESAFIO:
    - [X] Exibir feed de receitas

<br />
<hr />
<br />

### 🌐 Requests:
<br />

```
#  @name signup

POST http://localhost:3003/user/signup
Content-Type: application/json

{
   "name": "teste",
   "email": "teste@teste.com",
   "password": "teste123",
   "role": "NORMAL"
}
```

```
# @name login

POST http://localhost:3003/user/login
Content-Type: application/json

{
   "email": "teste@teste.com",
   "password": "teste123"
}
```

```
@token = {{login.response.body.token}}

GET http://localhost:3003/user/profile
Content-Type: application/json
Authorization: {{token}}
```

```
@token = {{login.response.body.token}}

GET http://localhost:3003/user/profile/id-aqui
Content-Type: application/json
Authorization: {{token}}
```

```
@token = {{login.response.body.token}}

GET http://localhost:3003/feed
Content-Type: application/json
Authorization: {{token}}
```

```
@token = {{login.response.body.token}}

POST http://localhost:3003/recipe
Content-Type: application/json
Authorization: {{token}}

{  
   "title": "Teste",
   "description": "teste teste teste",
   "created_date": "date"
}
```

```
@token = {{login.response.body.token}}

GET http://localhost:3003/recipe/valor-do-id-aqui
Content-Type: application/json
Authorization: {{token}}
```
<br />

### Tabelas no MySQL:
<br />

```
CREATE TABLE cookenu_users(
    id VARCHAR(50) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(6) NOT NULL DEFAULT 'NORMAL'
);
```

```
CREATE TABLE cookenu_recipes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_date Date NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);
```