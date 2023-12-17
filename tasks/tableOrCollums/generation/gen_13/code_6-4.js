
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the appearance of '|' and '-' is indicative of a table
    if (inputText.split('\n').some(line => line.includes('|') && line.includes('-'))) {
      return 'TABLE';
    } else {
      return 'COLUMNS';
    }
  } else {
    return 'NORMAL';
  }
}
