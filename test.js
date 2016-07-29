
function uppercase(m) {
  m.text = m.text.toUpperCase();
}

function getMessageActions(m) { 
  return [['upper case', uppercase]];
}
