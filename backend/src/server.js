const express  = require('express')
const path     = require('path')
const app      = express();
const morgan   = require('morgan')
const multer   = require('multer')
const uuid   =    require('uuid/v4')
const {format} = require('timeago.js')
const studentAPI = require("./routes/index");
const cors = require("cors");
//////////////////////////////
///////login/////////
const bodyParser  = require('body-parser');
const bcrypt = require ('bcrypt');
const User = require('./model/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));



app.post('/register', function(req,res) {
    const {username , password } = req.body;
    
    const user = new User({username,password});
    
    user.save( err =>{
        if (err){
            res.status(500).send('error al ingresar usuario ');
        }
        else{
            res.status(200).send('usuario registrado');
        }
    });
    
    
    });
    
    app.post('/autenticate', function(req,res) {
       
        const {username , password } = req.body;
    
        User.findOne({username},(err,user)=>{
            if(err){
                res.status(500).send('error a validar usuario ');
            }
            else if(!user){
                res.status(500).send('usuario no existe ');
                
            }else{
                user.isCorrectPasswoord(password,(err,result)=>{
                    if (err){
                        res.status(500).send('error al autenticar ');
                    }else if(result){
                        // res.status(200).send('usuario autenticado correctamenet ');
                        res.redirect('http://localhost:8080/view#/ListComponent');
    
                    }else{
                        // res.status(500).send('usuario y o contraseña incorrecta ');

                        res.redirect('http://localhost:8080/view#/');
                        
                    }
    
    
                })
            }
    
        })
    
    });



///////////////////////////////////






//setting
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



//mongoose conection
 require('./database.js')


//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors());



app.use((req, res , next)=> {
    app.locals.format = format;
    next()
})


//multer
const storage = multer.diskStorage({
    destination: function(req, file ,cb){
       cb(null, path.join(__dirname,'../../public/img/upload'))
     
    },
    filename: function(req, file , cb){
        cb(null, uuid()+path.extname(file.originalname))
    }
})
app.use(multer({storage:storage}).single('image'))



//routes
app.use(require('./routes/index.js'))

app.use("/api", studentAPI);


//file static
app.use(express.static(path.join(__dirname,'./public')))


app.listen(app.get('port'), ()=> {
    console.log('port on server', app.get('port'))
})