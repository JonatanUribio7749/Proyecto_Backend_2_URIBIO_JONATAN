# Proyecto Ecommerce - Entrega 1

Este repositorio contiene la **Primera Entrega** del proyecto de backend para un ecommerce, implementando registro de usuarios, login con JWT y validación de sesión actual.

---

## 📋 Descripción

- Modelo **User** con campos: `first_name`, `last_name`, `email`, `age`, `password`, `cartId` y `role`.
- Hash de contraseña con **bcrypt** (`hashSync`).
- Autenticación con **Passport**:
  - Estrategia **Local** para login (`email` + `password`).
  - Estrategia **JWT** para `current` a partir de cookie.
- Endpoints:
  - `POST /api/users/register` → Registro de usuario.
  - `POST /api/sessions/login`  → Login y emisión de cookie JWT.
  - `GET  /api/sessions/current`→ Obtención de datos del usuario autenticado.

---

## 🚀 Requisitos previos

- Node.js v16 o superior.
- MongoDB en ejecución (local o Atlas).
- Git (opcional).

---

## 🛠️ Instalación

1. **Clonar** el repositorio:
   ```bash
   git clone <TU_REPO_URL>
   cd proyecto-ecommerce
   ```
2. **Instalar** dependencias:
   ```bash
   npm install
   ```

---

## ⚙️ Configuración

1. Crear un archivo `.env` en la raíz con el siguiente contenido:
   ```dotenv
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=TuSecretoMuySeguro
   JWT_COOKIE_NAME=token
   PORT=8080
   ```
2. Asegurarse de no subir `.env` al repositorio (está incluido en `.gitignore`).

---

## ▶️ Ejecución en desarrollo

Iniciar el servidor con **nodemon** para recarga automática:

```bash
npm run dev
```

O directamente con Node:

```bash
npm start
```

El servidor escuchará por defecto en http://localhost:8080.

---

## 📝 Endpoints disponibles

### 1. Registro de usuario

- **URL**: `POST /api/users/register`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "first_name": "Juan",
    "last_name":  "Pérez",
    "email":      "juan@ejemplo.com",
    "age":        28,
    "password":   "MiPassSegura123"
  }
  ```
- **Respuesta**: `201 Created` con `{ status:'success', payload:{ id, email } }`.

### 2. Login

- **URL**: `POST /api/sessions/login`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email":    "juan@ejemplo.com",
    "password": "MiPassSegura123"
  }
  ```
- **Respuesta**: `200 OK` con `{ status:'success', message:'Login exitoso' }` y se envía cookie **token** (httpOnly).

### 3. Obtener sesión actual

- **URL**: `GET /api/sessions/current`
- **Autorización**: Cookie `token` enviada automáticamente.
- **Respuesta**: `200 OK` con `{ status:'success', payload: <datos del usuario> }`.

---

## ✅ Verificación

1. Registrar un usuario.
2. Hacer login y comprobar la cookie en el cliente (Postman o similar).
3. Llamar a `/api/sessions/current` y verificar que devuelve el perfil de usuario.

---

Sube el video a YouTube o Loom y añade el enlace en el README.

---

## 📂 Estructura de carpetas

```
proyecto-ecommerce/
├── .env
├── .gitignore
├── package.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── cart.model.js
│   ├── services/
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── users.controller.js
│   │   └── sessions.controller.js
│   └── routes/
│       ├── users.router.js
│       └── sessions.router.js
└── README.md
```

---


