const express = require ('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/frontend/build')))
app.get('/names',(req,res)=>{
    res.send('dipak paudel');
});

app.listen(5000,()=>{
    console.log('server is running in port 5000');
})