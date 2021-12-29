const express=require('express');
const db=require('./db')
db.connect((err)=>{
    if(err){
    throw err;}
    else {console.log("My sql connected");}
})
var cors = require('cors')
var app = express()

app.use(cors())
const port = 5000
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))
app.use('/api/result', require('./routes/result'))
app.use('/api/', require('./routes/participated_by'))



app.listen(port,()=>{
    console.log('Server running on port https://localhost:5000')
})

