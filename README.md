# Session y Cookies

- Similitud

  - Ambas sirven para almacenar datos vinculados a un cliente (navegador)
  - El formato es siempre CLAVE = VALOR. Guardo datos en texto que identificamos a través de una clave.
    VOLUMEN = '123'
    ID_USUARIO = '1234'

- Diferencias:

  - Cookies se guardan del lado del cliente, en el dispositivo del usuario.
  - Session se guarda del lado del servidor, se identifica a través de una cookie por detrás

  - Cookies se mantienen en el tiempo (duran mucho más que la session). Se mantiene cuando abrimos y cerramos el navegador
  - Session dura solamente el tiempo que abrimos y cerramos el navegador

  - Al estar del lado del cliente, se puede manipular facilmente, por lo que son INSEGURAS, no se deben guardar datos sensibles
  - La session se almacena del lado del servidor y el cliente NO PUEDE manipularla.

# Proceso de login con cookies y session

- Cuando el usuario ingresa su email y contraseña, el servidor va a crear una SESSION.
- Navegar entre las diferentes rutas y el servidor automaticamente va a saber que usuario soy.
- Cuando se cierra el navegador la session muere
- Cuando el usuario vuelva a ingresar a nuestro sitio despues de cerrar el navegador, deberá volver a loguearse

- En el formulario de login el usuario tilda "RECORDAR MI SESIÓN"
- Servidor antes de crear la sesión, guarda una COOKIE.
  - NO = usuario, password en cookie
  - NO = Podría guardar una cookie llamada USUARIO_A_LOGUEAR con el email del usuario
- Usuario cierra el navegador, vuelve a ingresar mañana.
- Session se mantiene ? NO. Cookie SI se mantiene pero tiene solamente el email (podria tener el ID) del usuario
- SERVIDOR debe crear una nueva session en base a la cookie
- Chequea si la cookie existe, si es que existe, vuelve a crear una session los datos del usuario
- Usuario cierra navegador, la session vuelve a morir, pero la cookie si se mantiene
- Chequea si la cookie existe, si es que existe, vuelve a crear una session los datos del usuario

- Si el cliente cierra sesión, borramos la cookie
- Servidor chequea si cookie existe, al no existir no se crea sesión
