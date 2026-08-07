// Route-specific middleware: validate :id param is a positive integer
module.exports = (req, res, next) => {
  const { id } = req.params
  if (!/^[1-9][0-9]*$/.test(id || '')) {
    return res.status(400).json({ error: 'Invalid id format. Must be a positive integer.' })
  }
  next()
}
