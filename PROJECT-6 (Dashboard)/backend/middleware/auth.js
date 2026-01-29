module.exports = (req, res, next) => {
  // If cookie not found
  if (!req.cookies || !req.cookies.admin) {
    return res.status(401).json({ auth: false, msg: "Not logged in" })
  }

  // User authenticated
  next()
}