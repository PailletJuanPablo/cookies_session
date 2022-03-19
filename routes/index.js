var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // SESSION = DEL LADO DEL SERVIDOR

  // LEO LAS COOKIES CON req.cookies.
  return res.send(req.session)
});

router.get('/login', (req, res) => {

  res.render('login')


})

router.post('/login', (req, res) => {

  const { email, password, recordar } = req.body;
  if (recordar) {
    res.cookie('usuario_email', email, { maxAge: 3600 })
  }
  // PROCESO DE CHEQUEO
  // SE CHEQUEA QUE ES CORRECTO EL EMAIL Y PASSWORD
  // GUARDAR AL USUARIO EN SESSION
  req.session.usuario = { email, password };
  return res.send('Te logueaste');
})

router.get('/perfil', (req, res) => {

  if (req.cookies.usuario_email) {
    req.session.usuario = { email: req.cookies.usuario_email }
  }
  console.log(req.session)
  const { usuario } = req.session;
  return res.render('perfil', { usuario })

})

router.post('/', (req, res) => {

  const { volumen } = req.body;
  res.cookie('volumen', volumen);

  res.render('index');




})

router.get('/otra', function (req, res, next) {
  // SESSION = DEL LADO DEL SERVIDOR
  req.session.nombre = 'Juan';
  res.render('index', { nombre: req.session.nombre });
});


module.exports = router;
