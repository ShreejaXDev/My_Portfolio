# Task Manager API (Express)

This project implements a simple RESTful Task Management backend using Node.js and Express. It is designed to satisfy the Practical 4 requirements: CRUD endpoints, logging middleware, content-type validation, route-specific id validation, 404 handler, and a centralized error handler.

Quick start

```bash
cd task-manager-api-rollno
npm install
# in development (auto-restarts):
npm run dev
# or run directly:
npm start
```

Endpoints

- GET  /tasks           → list all tasks (200)
- GET  /tasks/:id       → get single task (200 / 404)
- POST /tasks           → create task (201)
- PUT  /tasks/:id       → update task (200 / 404)
- DELETE /tasks/:id     → delete task (200 / 404)

Notes about implementation

- Logging middleware: `middleware/logger.js` logs method, URL and timestamp for every request.
- `requireJson` middleware rejects POST/PUT requests without `Content-Type: application/json`.
- `validateId` is a route-specific middleware that ensures `:id` is a positive integer before controllers run.
- Global 404 handler returns structured JSON for undefined routes.
- Global error handler (`middleware/errorHandler.js`) is defined last and returns a generic 500 response while logging the stack server-side.

Examples (curl)

Create a task:

```bash
curl -X POST http://localhost:5000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries"}'
```

Get all tasks:

```bash
curl http://localhost:5000/tasks
```

Update a task:

```bash
curl -X PUT http://localhost:5000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

Delete a task:

```bash
curl -X DELETE http://localhost:5000/tasks/1
```
