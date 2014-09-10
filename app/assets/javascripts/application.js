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


// $(document).ready(function(){    

//         $('form').on('submit', function(ev) {
//            ev.preventDefault();
//             console.log("here")
//             console.log()
//             var ajaxOptions = {
//               url: '/chat.json',
//               type: 'POST',
//               data: {'username': $('#username').val(), 'message': $('#message').val(), 'since': $('#since').val()}
//                };

//             $.ajax(ajaxOptions).success(function(data) {
//               console.log(data)
//             })
//             });
      
//         // Chat app
//       function addLines(data) {
//         $.each(data, function(i, chatline) {
//           $('ul').append('<li><span class="username">&lt;' + chatline.username + "&gt;</span> <span class='message'>" + chatline.message + "</span>");
//         });
//       }
    
// })