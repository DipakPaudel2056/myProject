const express = require ('express');
const app = express();

app.get('/names',(req,res)=>{
    res.send('Dipak');
});

app.listen(5000,()=>{
    console.log('server is running in port 5000');
})