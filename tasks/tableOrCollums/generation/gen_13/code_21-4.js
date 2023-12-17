
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if these delimiters are used in a structured manner
    if (inputText.split('\n').some(row => row.includes('|') && row.includes('-'))) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
