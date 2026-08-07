const express = require('express')
const router = express.Router()
const validateId = require('../middleware/validateId')

// In-memory storage
const tasks = []
let nextId = 1

// GET /tasks - list all tasks
router.get('/', (req, res) => {
  res.json({ data: tasks })
})

// GET /tasks/:id - get single task
router.get('/:id', validateId, (req, res) => {
  const id = Number(req.params.id)
  const task = tasks.find((t) => t.id === id)
  if (!task) return res.status(404).json({ error: 'Task not found' })
  res.json({ data: task })
})

// POST /tasks - create task
router.post('/', (req, res, next) => {
  try {
    const { title, completed = false } = req.body
    if (!title) return res.status(400).json({ error: 'Title is required' })

    const newTask = { id: nextId++, title, completed: Boolean(completed) }
    tasks.push(newTask)
    res.status(201).json({ data: newTask })
  } catch (err) {
    next(err)
  }
})

// PUT /tasks/:id - update task
router.put('/:id', validateId, (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const taskIndex = tasks.findIndex((t) => t.id === id)
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' })

    const { title, completed } = req.body
    if (title !== undefined) tasks[taskIndex].title = title
    if (completed !== undefined) tasks[taskIndex].completed = Boolean(completed)

    res.json({ data: tasks[taskIndex] })
  } catch (err) {
    next(err)
  }
})

// DELETE /tasks/:id - delete task
router.delete('/:id', validateId, (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const idx = tasks.findIndex((t) => t.id === id)
    if (idx === -1) return res.status(404).json({ error: 'Task not found' })
    const deleted = tasks.splice(idx, 1)[0]
    res.json({ data: deleted })
  } catch (err) {
    next(err)
  }
})

module.exports = router
