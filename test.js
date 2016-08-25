function getMessageActions(bubble) {
  return [[
    "Like", 
    function(bubble, peers) { peers.send("like", "1") },
    function(bubble, peers) { peers.send("like", "-1") },
  ]]
}

var actionHandlers = {
  'like': function(bubble, value) {
    console.log(value);
    var incr = parseInt(value);
    console.log(incr);
    if (bubble.badge) {
      bubble.badge = String(parseInt(bubble.badge) + incr);
    } else {
      bubble.badge = value;
    }
  },
}
