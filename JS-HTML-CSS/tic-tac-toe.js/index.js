const express = require('express')
const { browserOpen } = require('./utils/browser.open')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/src/public'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/src/public/pages/home.html')
})

app.listen(port, () => {
  console.log('App running on port', port);
  console.log('App running on http://localhost:3000/home');
})

browserOpen()