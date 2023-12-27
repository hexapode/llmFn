
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.match(/(\|.*\|)+/)) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.match(/-.*-/)) {
    return 'COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
