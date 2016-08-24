function getMessageActions(bubble) {
  if (bubble.data.liked) {
    return [
      ['Undo Like', function(bubble, peers) { 
        delete bubble.data.liked;
        peers.send("unlike", ""); 
      }],
    ]
  } else {
    return [
      ['Like', function(bubble, peers) { 
        bubble.data.liked = true;
        peers.send("like", ""); 
      }],
    ]
  }
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
