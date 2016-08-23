function getMessageActions(m) { 
  return [{
    title: 'upper case', 
    name: 'upper',
    onSelect: function(bubble, peers) {
      bubble.backgroundColorRGB = "CCCCFF";
      peers.send();
    }, 
    onReceive: function(bubble, value) {
      bubble.body = bubble.message.text.toUpperCase();
    },
  }]
}
