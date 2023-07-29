const express = require ('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/frontend/build')))
app.get('/names',(req,res)=>{
    res.json({
        status: 200,
        message:'displayed for mahesh'
    })
});

app.listen(5000,()=>{
    console.log('server is running in port 5000');
})