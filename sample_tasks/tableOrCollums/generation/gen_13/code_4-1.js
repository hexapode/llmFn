
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the delimiters are used in a structured layout
    if (inputText.split('\n').some(line => line.includes('|') && line.includes('-'))) {
      return 'TABLE_AND_COLUMNS';
    }
  }
  return 'NORMAL';
}
