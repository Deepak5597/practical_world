const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.use(cors());
app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index');
});

const appConfig = require('./config/app.config');
app.listen(appConfig.port,(err)=>{

    if(err){
        console.log('Something went wrong while initializing server')
    }else{
        console.log(`App is initialized on port ${appConfig.port}`)
    }    
});