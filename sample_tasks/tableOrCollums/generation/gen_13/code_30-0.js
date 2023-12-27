
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('\n')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('\n')) {
    return 'TABLE';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else {
    return 'NORMAL';
  }
}
