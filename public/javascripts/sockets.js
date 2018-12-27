if(Notification.permission === 'default'){
    Notification.requestPermission(function(){
        console.log('o usuário ainda não deu permissão ')
    })
}

var notify = function (data, type){
    var notification = new Notification(data.title,{
        body:data.msg,
        icon:'/images/' + type +'.png'
    });
}
var socket = io('http://localhost:3000');

socket.on('hello', function(msg){
    console.log(msg)
    notify(msg, 'user')
})