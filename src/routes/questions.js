const express = require('express');
const { getAllQuestions, createQuestion, updateQuestion } = require('../controllers/questionController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Gestión de preguntas
 */

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Listar todas las preguntas
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: Lista de preguntas
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllQuestions);

/**
 * @swagger
 * /api/questions:
 *   post:
 *     summary: Crear una nueva pregunta
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pregunta creada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error en el servidor
 */
router.post('/', createQuestion);

/**
 * @swagger
 * /api/questions/{id}:
 *   put:
 *     summary: Actualizar una pregunta
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la pregunta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pregunta actualizada exitosamente
 *       404:
 *         description: Pregunta no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateQuestion);

module.exports = router;
