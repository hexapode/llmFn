
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\|.*\|/s.test(inputText) && /-.*-/s.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|.*\|/s.test(inputText)) {
    return 'COLUMNS';
  } else if (/-.*-/s.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
