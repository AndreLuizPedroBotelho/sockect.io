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
    //console.log(msg);
    ///notify(msg, 'user')
})

socket.on('user_add_response', function(msg){
    notify(msg, 'user_add');
    $('main').load('/users #content_container');

})

$('#user_add').submit(function(e) {
    var formDataArray = $(this).serializeArray();
    var data = {
      nome: null
    }
  
    for (var i = 0; i < formDataArray.length; i++) {
      if (formDataArray[i].name == 'nome') {
        data.nome = formDataArray[i].value;
      }
    }
  
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function() {
        socket.emit('user_add', data);
        window.location = '/users';
      }
    });
    e.preventDefault();
  });
  