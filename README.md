# 🔹 Social Network api 🔹 <!-- revisar, no está acabado -->

![social_network_img](./img/Twitter.jpg)  
Welcome to the Social Network's api documentation. This api recreates a fictional database where users can register, log post and like post.

<details>
  <summary>Table of content 📂</summary> <!-- modificar -->
  <ol>
    <li><a href="## Deploy 🚀 ">Deploy 🚀 </a></li>
    <li><a href="## Stack ⚓">Stack ⚓</a></li>
    <li><a href="## Diagram Database 🌐">Diagram Database 🌐</a></li>
    <li><a href="## Local installation 💻">Local installation 💻</a></li>
    <li><a href="## Endpoints ✨">Endpoints ✨</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Deploy 🚀

<div align="center">
    <a href="https://social-network-backend-dev-npdx.2.ie-1.fl0.io"><strong>~ URL to deploy ~ </strong></a>
</div>

## Stack ⚓

Tecnologies used:

![Static Badge](https://img.shields.io/badge/JavaScript%20-%20gold)  
![Static Badge](https://img.shields.io/badge/MongoDB%20-%20darkgreen)
![Static Badge](https://img.shields.io/badge/FL0%20-%20blue)
![Static Badge](https://img.shields.io/badge/Atlas%20MongoDB%20-%20lightgreen)  
![Static Badge](https://img.shields.io/badge/Mongo%20Compas%20-%20lightgreen)

## Diagram Database 🌐

!['imagen-db'](./img/Captura.JPG)

## Local installation 💻

1. Clon repository  
   `$ npm init --yes`
2. Instal express  
   `$ npm i express`
3. Instal nodemon  
   `$ npm i nodemon -D`
   ` $ npm i dotenv -E`
4. Add type module into package.json

```json
{
  "type": "module"
}
```

5. Instal mongoose  
   `$ npm i mongoose`
6. Instal bcrypt  
   `$ npm i bcrypt`
7. Instal webtoken  
   `$ npm i jsonwebtoken`

## Endpoints ✨

<details>
  <summary>Auth</summary> 
  <details>
  <summary>User Registration</summary>  
  -  Register new user
    
    Registers a new user.

        POST /register

    Body:

```json
{
  "name": "user",
  "email": "user@user.com",
  "password": "123456"
}
```

  </details>

  <details>
<summary>User Login</summary>

- Login user

  User logging using their email and password.
  POST /login

  Body:

```json
{
  "email": "superadmin@superadmin.com",
  "password": "123456"
}
```

</details>
</details>

<details>
<summary>User</summary> 
<details>
<summary>Get Users</summary>  

- Retrieve all users

  Superadmin can retrieve all users registred.
  GET /

  Auth:
  superadmin's token

    superadmin's credentials:

```json
{
  "email": "superadmin@superadmin.com",
  "password": "123456"
}
```
</details>

<details>

<summary>Get User's Profile</summary>  

- Retrieve all users

  User can retrieve their profile.
  GET /profile

  Auth:
  user's token

    user's credentials:

```json
{
  "email": "user@user.com",
  "password": "123456"
}
```
</details>

<details>
<summary>Update User's Profile</summary>  

- Update user's profile

  User can update their name.
  PUT /profile

  Auth:
  user's token

    user's credentials:

```json
{
  "email": "user@user.com",
  "password": "123456"
}
```   

  Body:

```json
{
  "name": "newname",
}
```   
</details>

<details>
<summary>Delete User</summary>  

- Delete user by id

  Superadmin can delete user using their id.
  DELETE /:_id

  Auth:
  superadmin's token

    superadmin's credentials:

```json
{
  "email": "superadmin@superadmin.com",
  "password": "123456"
}
```
</details>

<details>
<summary>Get post by User's id</summary>  

- Retrieve posts by user's id

  User can retrieve posts from other users by their id.
  GET /posts/:userId

  Auth:
  user's token

    user's credentials:

```json
{
  "email": "user@user.com",
  "password": "123456"
}
```   
</details>


</details>

## Author ✒️

- Ana Rius - student FSD
  - [GitHub](https://github.com/ariusvi)

## Acknowledgements 🙏

Special thanks to Daniel Tarazona for his incredible work as a teacher and above all for his infinite patience in helping to resolve any doubts and calm the panic.

Thanks to my classmates:  
Pedro for his patience and help, especially to confirm that I understand things.  
Marina and Marta for her moral support, joint laughter and tears, as well as their help.
