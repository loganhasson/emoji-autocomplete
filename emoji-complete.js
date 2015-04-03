$(function(){
  $('#textarea1').textcomplete([
      {
          match: /\B:([\-+\w]*)$/,
          search: function (term, callback) {
              callback($.map(emojies, function (emoji) {
                  return emoji.indexOf(term) === 0 ? emoji : null;
              }));
          },
          template: function (value) {
              var src = "./bower_components/emoji-parser/emoji/"
              return '<img src="' + src + value + '.png"></img>' + value;
          },
          replace: function (value) {
              return ':' + value + ': ';
          },
          index: 1
      }
  ]);
})
