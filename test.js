
function uppercase(m) {
  m.text = m.text.toUpperCase();
}

function getMessageActions(m) { 
  return [{title: 'upper case', name: 'upper', fn: uppercase, }];
}
