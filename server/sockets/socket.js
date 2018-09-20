
const { io } = require('../server');//importamos el modulo io

io.on('connection', (client) => {

    console.log('usuario conectado');


    client.emit('enviarMensajeDesdeBack', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensajeDesdeFront', (data, callback) => {

        console.log(data);

        //broadcast es para entregar a todo el mundo el mensaje, si no lo pones, solo se le entregaría al que envió un mensaje aquí
        client.broadcast.emit('enviarMensajeDesdeBack', data);
       /* if ( message.usuario ) {
            callback({
                resp: 'Todo fue bien'
            });
        } else {
            callback({
                resp: 'Mal!!!!!'
            });
        }*/
    });
});
