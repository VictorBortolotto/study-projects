const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/public/routes/routes')

app.use(
    express.static(__dirname + '/src/public')
)

app.get(routes.login, (req, res) => {
    res.sendFile(__dirname + '/src/public/pages/login.html')
})

app.get(routes.home, (req, res) => {
    res.sendFile(__dirname + '/src/public/pages/home.html')
})

app.get(routes.lists, (req, res) => {
    res.sendFile(__dirname + '/src/public/pages/lists.html')
})

app.get(routes.profile, (req, res) => {
    res.sendFile(__dirname + '/src/public/pages/profile.html')
})

app.listen(port, () => {
    console.log('Running on port ' + port + '...');
})