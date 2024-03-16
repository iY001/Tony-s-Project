const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000 || process.env.port
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Tonys Project API'))

app.use('/user', require('./routes/User'))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))