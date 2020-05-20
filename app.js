var express = require('express');
var app = express();

app.use(express.json());
app.set('port', process.env.port || 8000)

const studentRouter = require('./routes/students')

app.use('/students', studentRouter)
app.get('/', (req, res) => {
    res.send('Welcome to the student grade app')
})

app.post('/', (req, res) => {
    res.send('Welcome to the student grade app')
})

module.exports = app;

//this is done in bin/www
//app.listen(app.get('port'), () => console.log('listening on port ${app.get('port')}'))