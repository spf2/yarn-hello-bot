
function uppercase(ctx, msg) {
  msg.text = msg.text.toUpperCase();
  ctx.forward = false;
}

function getMessageActions(m) { 
  return [{title: 'upper case', name: 'upper', fn: uppercase, }];
}
