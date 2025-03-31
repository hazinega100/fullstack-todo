import { Router } from 'express';
import sequelize from '../config/database.js';
import { DataTypes } from "sequelize";

const router = Router();

const Task = sequelize.define('task', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	title: { type: DataTypes.STRING, allowNull: false },
	completed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

sequelize.sync({ force: false })
.then(() => console.log('Database synchronized'));

router.get('/', async (req, res) => {
	const tasks = await Task.findAll();
	res.json(tasks);
});

router.post('', async (req, res) => {
	const task = await Task.create(req.body);
	res.json(task);
});

router.put('/:id', async (req, res) => {
	await Task.update(req.body, { where: { id: req.params.id } });
	res.json({ message: 'Task updated' });
});

router.delete('/:id', async (req, res) => {
	await Task.destroy({ where: { id: req.params.id } });
	res.json({ message: 'Task deleted' });
});

export default router;
