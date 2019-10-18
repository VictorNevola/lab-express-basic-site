const express = require('express');
const     app = express();
const {home, about, gallery} = require('./routes/index');
app.use(express.static('public'));

app.get("/home", home);
app.get("/about", about);
app.get("/gallery", gallery);

app.listen(3000, ()=>{
    console.log('oi');
})