function getMessageActions(message) { 
  return [
    ['Like', function(bubble, peers) { peers.send("like"); }],
  ]
}

var actionHandlers = {
  'like': function(bubble, value) {
    if (bubble.badge) {
      bubble.badge = String(parseInt(bubble.badge) + 1);
    } else {
      bubble.badge = "1";
    }
  },
}
