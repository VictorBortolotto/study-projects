const express = require('express')
const app = express()
const port = 3000

app.use(
  express.static(__dirname + '/src/public')
)

app.get("/calculator",(req, res) => {
  res.sendFile(__dirname + '/src/public/pages/calculator.html')
})

app.listen(port, () => {
  console.log('Application running on port ', port);
  console.log(`http://localhost:${port}/calculator`);
})