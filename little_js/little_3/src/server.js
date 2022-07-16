const express = require('express')
const moment = require('moment');
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/time', (req, res) => {
    let now = moment();
    res.send(now.format())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})