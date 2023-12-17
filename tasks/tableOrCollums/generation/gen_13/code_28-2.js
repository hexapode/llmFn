
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('  ')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('  ')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('  ')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
