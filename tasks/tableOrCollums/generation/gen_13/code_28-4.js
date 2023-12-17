
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\b\|\b/.test(inputText) && /\b-\b/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\b\|\b/.test(inputText)) {
    return 'COLUMNS';
  } else if (/\b-\b/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
