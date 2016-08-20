function getMessageActions(m) { 
  return [{
    title: 'upper case', 
    id: 'upper',
    onSelect: function(bubble, peers) {
      bubble.backgroundColorRGB = "CCCCFF";
      peers.send();
    }, 
    onReceive: function(bubble, value) {
      bubble.message.text = bubble.message.text.toUpperCase();
    },
  }]
}
