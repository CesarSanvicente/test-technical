const express = require('express');
const { getEmployeeReport, getDepartmentReport } = require('../controllers/reportController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Gestión de reportes
 */

/**
 * @swagger
 * /api/reports/employee/{id}:
 *   get:
 *     summary: Generar reporte de evaluación para un empleado
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Reporte generado exitosamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/employee/:id', getEmployeeReport);

/**
 * @swagger
 * /api/reports/department/{id}:
 *   get:
 *     summary: Generar reporte por departamento
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del departamento
 *     responses:
 *       200:
 *         description: Reporte generado exitosamente
 *       404:
 *         description: No se encontraron empleados en este departamento
 *       500:
 *         description: Error en el servidor
 */
router.get('/department/:id', getDepartmentReport);

module.exports = router;
