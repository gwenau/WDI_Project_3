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
  $('<li>'+chat.chat_message+'</li>').appendTo("#todo-list")
}

function createChat(){
  // debugger;
  console.log($("#new-todo-chat").val())
  request("POST", "/chats", {
    chat: {
      chat_message: $("#new-todo-chat").val()
    }
  }).success(function(data){
    // Semicolons required here because it's calling on two different functions within this method.
    $("#new-todo-chat").val("");
    appendNewTask(data);
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

  $("#new-todo-chat").on("keypress", function(event){
    if(event.which == '13')
      createChat()
    // console.log('hi')
  })
})