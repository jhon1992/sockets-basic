var socket = io();

// escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// enviar imfornación
socket.emit('enviarMensaje', {
    usuario: 'Jhonatan',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Se disparó el callback ', respuesta);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});