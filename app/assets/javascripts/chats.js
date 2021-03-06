// jQuery syntax used for the chat application.
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
    '<span class="destroy" data-chat-id="'+chat.id + '" data-time="' + someDate + '"> X</span></li>').appendTo("#chat-list")
}

function createChat(){
  request("POST", "/chats", {
    chat: {
      chat_message: $("#new-chat-line").val(),
      username: $("#username").val()
    }
  }).success(function(data){
    // Semicolons required here because it's calling on two different functions within this method.
    $("#new-chat-line").val("");
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
  request("GET", "/chats", { created_at: $('li').last().find('span').data('time')}).success(function(data){
    $.each(data, function(i, task){
        appendNewTask(task)
    })
  })
}

function updateChatBox(){
  setInterval(function(){ getChats() }, 1000);
}

$(function(){
  getChats();
  updateChatBox();
  $("#chat-list").on("click", ".destroy", destroyTask)
  $("#new-chat-line").on("keypress", function(event){
    if(event.which == '13')
      createChat();
  })
})