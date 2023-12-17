
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('\n')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('\n')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('\n')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
