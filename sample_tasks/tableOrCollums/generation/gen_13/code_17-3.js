
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\|.*\|/.test(inputText) && /-/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|.*\|/.test(inputText)) {
    return 'COLUMNS';
  } else if (/-/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
