
function uppercase(ctx) {
  ctx.message.text = ctx.message.text.toUpperCase();
  ctx.forward();
}

function getMessageActions(m) { 
  return [{title: 'upper case', name: 'upper', fn: uppercase, }];
}
