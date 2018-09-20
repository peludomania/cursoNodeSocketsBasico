var socket = io();

socket.on('connect', function() {

    console.log('Conectado')

});

// on es escuchar un suceso
socket.on('disconnect', function() {
    console.log('Conexión perdida');
});

// Los emits son para enviar información
socket.emit('enviarMensajeDesdeFront', {
    usuario: 'Alberto',
    mensaje: 'Hola mundo'
}, function( resp ) {
    console.log(resp);
});

socket.on('enviarMensajeDesdeBack', function(message) {
    console.log(message);
});