function getMessageActions(message) { 
  return [{
    title: 'Like', 
    name: 'like',
    onSelect: function(bubble, peers) {
      peers.send();
    }, 
    onReceive: function(bubble, value) {
      console.log("orig: " + bubble.badge);
      if (bubble.badge) {
        bubble.badge = String(parseInt(bubble.badge) + 1);
        console.log("new: " + bubble.badge);
      }
      bubble.badge = "1";
    },
  }]
}
