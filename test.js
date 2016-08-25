function getMessageActions(bubble) {
  var label = "Like";
  var key = "like";
  if (bubble.isToggled("liked")) {
    label = "Undo Like";
    key = "unlike";
  }
  return [label, function(bubble, peers) { bubble.toggle("liked"); peers.send(key) }]
}

var actionHandlers = {
  'like': function(bubble, value) {
    if (bubble.badge) {
      bubble.badge = String(parseInt(bubble.badge) + 1);
    } else {
      bubble.badge = "1";
    }
  },
  'unlike': function(bubble, value) {
    if (!bubble.badge || parseInt(bubble.badge) <= 1) {
      bubble.badge = "";
    } else {
      bubble.badge = String(parseInt(bubble.badge) - 1);
    }
  },
}
