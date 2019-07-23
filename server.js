const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (req,res)=>res.sendFile(__dirname + '/public/dist/public/index.html'));


app.listen(8000);