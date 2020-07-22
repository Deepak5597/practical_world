const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const engine = require('ejs-mate');

const postConfig = require('./config/post.config');

app.engine('ejs',engine);
app.set('view engine','ejs');
app.use(cors());
app.use('/css',express.static('css'));
app.use('/posts/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/posts/images',express.static('images'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index',{'postConfig':postConfig.posts});
});
app.get('/posts/:postHeading/:postSubheading',(req,res)=>{
    res.render('posts',{postPath:'posts/'+req.params.postHeading+'/'+req.params.postSubheading,'postConfig':postConfig.posts,'mainHeading':req.params.postHeading,'subHeading':req.params.postSubheading},);
});

const appConfig = require('./config/app.config');
app.listen(appConfig.port,(err)=>{

    if(err){
        console.log('Something went wrong while initializing server')
    }else{
        console.log(`App is initialized on port ${appConfig.port}`)
    }    
});