var yandexUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate";
var yandexKey = "trnsl.1.1.20160825T224654Z.60d8da3a9f67c52b.ba2dfcc5fcd88c42ed64e266a52c105911fce47c";

function initialize(stream) {
  console.log(stream.thread.topic);
  stream.backgroundColorRGB = "#FFFFCC";
  util.setTimeout(function() { 
    stream.backgroundColorRGB = "#FFCCFF";
    console.log(stream.backgroundColorRGB);
  }, 1000);
}

function getMessageActions(bubble) {
  return [
    [
      "Like", 
      function(bubble, peers) { peers.send("like", "1") },
      function(bubble, peers) { peers.send("like", "-1") },
    ],
    [
      "Translate",
      function(bubble, peers) {
        var url = yandexUrl + "?key=" + yandexKey + "&lang=en-es&text=" + encodeURI(bubble.body);
        util.fetch(url).then(function(response) {
          var json = JSON.parse(response.body);
          bubble.body = json.text[0];
        });
      }
    ],
  ]
}

var actionHandlers = {
  'like': function(bubble, value) {
    console.log(bubble.badge.count + " / " + parseInt(value) + " / " + value);
    bubble.badge.count += parseInt(value);
  },
}
