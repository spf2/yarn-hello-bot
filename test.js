
function uppercase(ctx, bubble) {
  bubble.message.text = bubble.message.text.toUpperCase();
  console.log(bubble.backgroundColorRGB);
  bubble.backgroundColorRGB = "FFFFFF";
}

function getMessageActions(m) { 
  return [{title: 'upper case', name: 'upper', fn: uppercase, }];
}
