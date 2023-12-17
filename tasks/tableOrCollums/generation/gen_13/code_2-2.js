
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && (inputText.indexOf('|') < inputText.indexOf('-'))) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.indexOf('|') < 100) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.indexOf('-') < 100) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
