
function doesItContainTableOrColumns(inputText) {
  // Checking for more specific table or column delimiters
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('vs.') && inputText.includes('%')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('vs.') && inputText.includes('%')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('vs.') && inputText.includes('%')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
