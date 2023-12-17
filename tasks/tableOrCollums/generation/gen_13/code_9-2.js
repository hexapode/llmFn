
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\|\s*\|\s*\|/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|\s*\|/.test(inputText)) {
    return 'COLUMNS';
  } else if (/-{2,}\s*?-{2,}/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
