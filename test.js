function getMessageActions(message) { 
  return [{
    title: 'Like', 
    name: 'like',
    onSelect: function(bubble, peers) {
      peers.send();
    }, 
    onReceive: function(bubble, value) {
      if (bubble.badge) {
        bubble.badge = String(parseInt(bubble.badge) + 1);
      }
      bubble.badge = "1";
    },
  }]
}
