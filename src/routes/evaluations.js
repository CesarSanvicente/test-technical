const express = require('express');
const { getAllEvaluations, getEvaluationById, createEvaluation, updateEvaluation, submitEvaluation } = require('../controllers/evaluationController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Evaluations
 *   description: Gestión de evaluaciones
 */

/**
 * @swagger
 * /api/evaluations:
 *   get:
 *     summary: Listar todas las evaluaciones
 *     tags: [Evaluations]
 *     responses:
 *       200:
 *         description: Lista de evaluaciones
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllEvaluations);

/**
 * @swagger
 * /api/evaluations/{id}:
 *   get:
 *     summary: Obtener detalles de una evaluación
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la evaluación
 *     responses:
 *       200:
 *         description: Detalles de la evaluación
 *       404:
 *         description: Evaluación no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getEvaluationById);

/**
 * @swagger
 * /api/evaluations:
 *   post:
 *     summary: Crear una nueva evaluación
 *     tags: [Evaluations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, completed]
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evaluación creada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error en el servidor
 */
router.post('/', createEvaluation);

/**
 * @swagger
 * /api/evaluations/{id}:
 *   put:
 *     summary: Actualizar una evaluación
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la evaluación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               period:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, completed]
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evaluación actualizada exitosamente
 *       404:
 *         description: Evaluación no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateEvaluation);

/**
 * @swagger
 * /api/evaluations/{id}/submit:
 *   post:
 *     summary: Enviar una evaluación completada
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la evaluación
 *     responses:
 *       200:
 *         description: Evaluación enviada exitosamente
 *       404:
 *         description: Evaluación no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.post('/:id/submit', submitEvaluation);

module.exports = router;
