const express = require('express');
const app = express();
const connectDB = require('./middlewares/db');


connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/auth', require('./routes/authRoute'))
app.use('/', (req, res) => {res.send('Home')})
app.listen(5000, (req, res)=>{
    console.log('listening on port 3000');
});