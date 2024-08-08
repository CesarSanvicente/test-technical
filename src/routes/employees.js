const express = require('express');
const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee } = require('../controllers/employeeController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Gestión de empleados
 */

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Listar todos los empleados
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *       500:
 *         description: Error en el servidor
 */
router.get('/', getAllEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Obtener detalles de un empleado
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Detalles del empleado
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', getEmployeeById);

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               personalInfo:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *               professionalInfo:
 *                 type: object
 *                 properties:
 *                   position:
 *                     type: string
 *                   department:
 *                     type: string
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error en el servidor
 */
router.post('/', createEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Actualizar información de un empleado
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               personalInfo:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *               professionalInfo:
 *                 type: object
 *                 properties:
 *                   position:
 *                     type: string
 *                   department:
 *                     type: string
 *     responses:
 *       200:
 *         description: Empleado actualizado exitosamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateEmployee);

module.exports = router;
