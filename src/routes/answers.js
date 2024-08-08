const express = require('express');
const { getAllAnswers, createAnswer, updateAnswer } = require('../controllers/answerController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: Gestión de respuestas
 */

/**
 * @swagger
 * /api/answers:
 *   get:
 *     summary: Listar todas las respuestas
 *     tags: [Answers]
 *     responses:
 *       200:
 *         description: Lista de respuestas
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllAnswers);

/**
 * @swagger
 * /api/answers:
 *   post:
 *     summary: Crear una nueva respuesta
 *     tags: [Answers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *               answerText:
 *                 type: string
 *     responses:
 *       201:
 *         description: Respuesta creada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error en el servidor
 */
router.post('/', createAnswer);

/**
 * @swagger
 * /api/answers/{id}:
 *   put:
 *     summary: Actualizar una respuesta
 *     tags: [Answers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la respuesta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *               answerText:
 *                 type: string
 *     responses:
 *       200:
 *         description: Respuesta actualizada exitosamente
 *       404:
 *         description: Respuesta no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateAnswer);

module.exports = router;
