// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//inicializar variables,
var app = express();

//Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()) //se ejecuten siempre si hay algo en el body esto lo pone objjavascript


//Importar las rutas
var appRoute = require('./Rutas/appR')
var usuarioRuta = require('./Rutas/usuarioR')
var loginRuta = require('./Rutas/Login')

//Conexiona la bas e de datos
mongoose.connection.openUri( 'mongodb://localhost:27017/HospitalDB',( err,res )=>{
    if(err) throw err;
    console.log( 'base de datos online' )
})



//Esto es un midlware , e ejecuta antes que se otrass rutas '/' iual q antes
app.use('/usuario',usuarioRuta)
app.use('/login',loginRuta)

app.use('/',appRoute)


//escuchar peticio
app.listen(3000,()=>{
    console.log('Express serve corriendo en el puerto 3000')
});



