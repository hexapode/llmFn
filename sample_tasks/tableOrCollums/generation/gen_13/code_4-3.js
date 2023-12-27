
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\|[^\n]+\|/.test(inputText)) {
    return 'COLUMNS';
  } else if (/--+/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
