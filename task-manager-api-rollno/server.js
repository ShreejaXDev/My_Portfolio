const express = require('express')
const tasksRouter = require('./routes/tasks')
const logger = require('./middleware/logger')
const requireJson = require('./middleware/requireJson')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(logger)

// Reject POST/PUT without Content-Type: application/json
app.use(requireJson)

app.use('/tasks', tasksRouter)

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'Route does not exist' })
})

// Global error handler (must be last)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
