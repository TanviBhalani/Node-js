const http = require("http");
const port = 1008

const portHandler = (req, res) => {
    res.write("Hello this is node server")
    res.end()
}

const server = http.createServer(portHandler)

server.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port : ", port)
})