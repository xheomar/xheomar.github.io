$('form').submit(function() {
event.preventDefault();
var SportsRuUrlTemplate = "https://www.sports.ru/api/comment/get/message.json?order_type=old&limit=100&message_class=Sports%3A%3ABlog%3A%3APost%3A%3APost&new_time=1&style=newjs&message_id=";
if ($('.input').val() !== '') {

    var newTask = $('.input').val();
    var JsonUrlTemplate = newTask.match(/\d{7}/)[0];
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';
    var json_url = SportsRuUrlTemplate + JsonUrlTemplate;
    $.ajax({
      'url': yql_url,
      'data': {
        'q': 'SELECT * FROM json WHERE url="'+json_url+'"',
        'format': 'json',
        'jsonCompat': 'new',
      },
      'dataType': 'jsonp',
      'success': function(response) {

       var comments = response.query.results.json.data.comments;
       for (var i = 0; i < comments.length; i++)
       {
          var texts = "";
          texts+=comments[i].c_time.full + ': '; 
          texts+= '<b>' + '[' + comments[i].message_info.name + '] ' + '</b>'; 
          texts+= '<b><u>' +comments[i].user.name + '</u></b>' + ': '; 
          if (typeof comments[i].answer_to !== 'undefined')
          {
            texts+= '<i>' + '(в ответ на ';
            texts+=comments[i].answer_to.user.name + ': ';
            texts+=comments[i].answer_to.text + ') ' + '</i>';
          }
          texts+=comments[i].text + '\n'; 

          var newLi = $('<li>' + texts + '</li>');
          $('ul').prepend(newLi);
       }
      }
    });
   }
});
