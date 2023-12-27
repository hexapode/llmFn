
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('vs.')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') || (inputText.includes('-') && inputText.includes('vs.'))) {
    return 'TABLE';
  } else if (inputText.includes('-') || inputText.includes('vs.')) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
