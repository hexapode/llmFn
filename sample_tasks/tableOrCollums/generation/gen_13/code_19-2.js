
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && (inputText.indexOf('-') - inputText.indexOf('|') < 100)) {
    return 'TABLE';
  } else if (inputText.includes('|') && (inputText.indexOf('|') - inputText.indexOf(' ') < 100)) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
