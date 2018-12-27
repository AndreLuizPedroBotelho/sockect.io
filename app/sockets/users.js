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

        client.on('user_remove',function(data){
            //broadcast mostra para os Outros usuarios
            client.broadcast.emit('user_remove_response',{
                title: 'Professor Removido',
                msg: 'O professor ' + data.nome + ' foi demitido!'
            })
        })

        client.on('user_edit',function(data){
            console.log(data)
            //broadcast mostra para os Outros usuarios
            client.broadcast.emit('user_edit_response',{
                title: 'Professor Editado',
                msg: 'O professor ' + data.nome + ' foi editado!'
            })
        })
    });
}