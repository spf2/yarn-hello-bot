function getMessageActions(m) { 
  return [{
    title: 'upper case', 
    id: 'upper',
    onSelect: function(ctx, bubble) {
      bubble.backgroundColorRGB = "CCCCFF";
      ctx.send();
    }, 
    onReceive: function(ctx, bubble, value) {
      bubble.message.text = bubble.message.text.toUpperCase();
    },
}
