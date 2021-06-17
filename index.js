const express = require('express');
const app=express();
const path = require('path');


app.use(message=(req,res,next)=>{
    let day = new Date().getDay();
    if (day>=1 && day<=5)
    {(next())}
    else
    {res.send("Site is out of working days")}

})
app.use(message=(req,res,next)=>{
    let hour = new Date().getHours();
    if (hour>=9 && hour<=23)
    {(next())}
    else
    {res.send("Site is out of working days")}

})
app.use(express.static(path.join('./public')))


const PORT=process.env.PORT ||5000;
app.listen(PORT,(err)=>err?console.error(err):console.log(`okey server is running! on PORT ${PORT}`))