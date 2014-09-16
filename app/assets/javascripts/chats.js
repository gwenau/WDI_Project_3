// request("GET", "/tasks", null).success()
function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: "json",
    data: data
  })
}

function appendNewTask(chat){
  var someDate = new Date(chat.created_at);
    someDate = someDate.getTime();
  $('<li><strong>'+chat.username+"</strong>: "+chat.chat_message+
    '<span class="destroy" data-chat-id="'+chat.id + '" data-time="' + someDate + '"> X</span></li>').appendTo("#todo-list")
}

function createChat(){
  // debugger;
  
  request("POST", "/chats", {
    chat: {
      chat_message: $("#new-todo-chat").val(),
      username: $("#username").val()
      // created_at: $("#c_timestamp").val()
    }
  }).success(function(data){
    // Semicolons required here because it's calling on two different functions within this method.
    $("#new-todo-chat").val("");
    appendNewTask(data);
  })
}



function destroyTask(){
  $this = $(this) // since this is jquery whereas native javascript is _this = this.
  taskId = $this.data("chat-id")
  request("DELETE", "/chats/"+taskId, null).success(function(){
    // $this has been binded to the destroyTask function.
    $this.parent().remove()
  })
}


function getChats(){
  console.log('Gets chats')

  request("GET", "/chats", { created_at: $('li').last().find('span').data('time')}).success(function(data){
    $.each(data, function(i, task){
        appendNewTask(task)

    })
  })
}

function updateChatBox(){
  setInterval(function(){ getChats() }, 10000);
}

$(function(){


  getChats();

  updateChatBox();

  $("#todo-list").on("click", ".destroy", destroyTask)

  $("#new-todo-chat").on("keypress", function(event){
    if(event.which == '13')
      createChat();
    // console.log('hi')
  })
})