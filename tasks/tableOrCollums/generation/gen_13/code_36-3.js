
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.match(/[\|\t].*?-[\|\t]/g)) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.match(/[\|\t].*?-[\|\t]/g)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
