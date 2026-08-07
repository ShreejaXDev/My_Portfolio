// Reject POST/PUT if Content-Type is not application/json
module.exports = (req, res, next) => {
  if ((req.method === 'POST' || req.method === 'PUT') && req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({ error: 'Content-Type must be application/json' })
  }
  next()
}
