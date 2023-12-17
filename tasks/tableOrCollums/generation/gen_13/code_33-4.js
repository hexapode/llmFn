
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if there is a reasonable amount of occurrences of delimiters
    const countRowsWithDelimiter = inputText.match(/-.*[\r\n]/g);
    if (countRowsWithDelimiter && countRowsWithDelimiter.length > 3) {
      return 'TABLE_AND_COLUMNS';
    }
  }
  return 'NORMAL';
}
