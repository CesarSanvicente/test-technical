# Test API Backend

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)
![Express](https://img.shields.io/badge/Express-v4.17.1-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.6-yellow)
![Mongoose](https://img.shields.io/badge/Mongoose-v5.12.13-red)

## Descripción

API RESTful para un sistema de evaluación 360 grados de empleados remotos en una empresa de desarrollo de aplicaciones.

## Requisitos

- Node.js v14.17.0 o superior
- MongoDB v4.4.6 o superior

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT para autenticación
- bcryptjs para hashing de contraseñas

## Configuración del Proyecto

### Clonar el repositorio

```bash
git clone <url_del_repositorio>
cd test-technical



## Estructura del proyecto  
src
├── config
├── controllers
│   ├── authController.js
│   ├── employeeController.js
│   ├── evaluationController.js
│   ├── questionController.js
│   ├── answerController.js
│   └── reportController.js
├── middlewares
│   ├── errorHandler.js
│   └── rateLimiter.js
├── models
│   ├── User.js
│   ├── Employee.js
│   ├── Evaluation.js
│   ├── Question.js
│   └── Answer.js
├── routes
│   ├── auth.js
│   ├── employees.js
│   ├── evaluations.js
│   ├── questions.js
│   ├── answers.js
│   └── reports.js
├── services
├── utils
├── tests
│   ├── auth.test.js
│   ├── employee.test.js
│   ├── evaluation.test.js
│   ├── question.test.js
│   └── answer.test.js
└── index.js
