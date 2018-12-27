module.exports = function(io){
    io.sockets.on('connection',function(client){
        client.emit('hello',{title:'Bem vindo',msg:'Você está Conectado!'});
    
        client.on('user_add',function(data){
            //broadcast mostra para os Outros usuarios
            client.broadcast.emit('user_add_response',{
                title:'Novo Professor',
                msg: 'O professor ' + data.nome + ' foi contratado!'
            })
        })
    });
}