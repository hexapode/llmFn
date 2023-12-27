
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.split('\n').every(line => line.includes('|'))) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('\t')) {
    return 'TABLE';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else {
    return 'NORMAL';
  }
}
