// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-animate
//= require_tree .

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