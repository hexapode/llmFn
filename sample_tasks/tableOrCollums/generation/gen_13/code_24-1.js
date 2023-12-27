
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (/\|.*\|/g.test(inputText) && /-.*-/g.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|.*\|/g.test(inputText)) {
    return 'COLUMNS';
  } else if (/-.*-/g.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
