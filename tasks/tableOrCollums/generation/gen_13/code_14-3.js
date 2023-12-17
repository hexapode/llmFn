
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.match(/\|[\w\s]+\|/g)) {
    return 'COLUMNS';
  } else if (inputText.match(/\|[\w\s]+\|/g)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
