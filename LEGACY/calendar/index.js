const express = require('express')
const app = express()
const port = 4200

app.use(
  express.static(__dirname + '/src/public')
)

app.get('/calendar', (req, res) => {
  res.sendFile(__dirname + '/src/public/opened.calendar/calendar.html')
})

app.get('/modal/calendar', (req, res) => {
  res.sendFile(__dirname + '/src/public/modal.calendar/calendar.html')
})

app.listen(port, () => {
  console.log('App running on port ', port);
})