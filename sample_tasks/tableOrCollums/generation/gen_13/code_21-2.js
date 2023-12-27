
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.match(/\|\s*[^\|\s]+\s+\|/) || inputText.match(/\-\s+/)) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.match(/\|\s*[^\|\s]+\s+\|/)) {
    return 'COLUMNS';
  } else if (inputText.match(/\-\s+/)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
