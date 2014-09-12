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
  $('<li>'+chat.chat_message+
    '<button class="destroy" data-chat-id="'+chat.id+'">Delete</button></li>').appendTo("#todo-list")
}

function createChat(){
  // debugger;
  // $("#chat_user_id").val()
  request("POST", "/chats", {
    chat: {
      chat_message: $("#new-todo-chat").val(),
      user_id: $("#chat_user_id").val()
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
  request("GET", "/chats", null).success(function(data){
    $.each(data, function(i, task){
        appendNewTask(task)
    })
  })
}


$(function(){
  getChats()

  $("#todo-list").on("click", ".destroy", destroyTask)

  $("#new-todo-chat").on("keypress", function(event){
    if(event.which == '13')
      createChat()
    // console.log('hi')
  })
})