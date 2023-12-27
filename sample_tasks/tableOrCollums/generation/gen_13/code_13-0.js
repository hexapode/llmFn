
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the delimiters are part of a table or columns
    if (inputText.split('\n').some(line => line.split('|').length > 1 && line.split('-').length > 1)) {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    // Check if the delimiters are part of columns
    if (inputText.split('\n').some(line => line.split('|').length > 1)) {
      return 'COLUMNS';
    }
  } else if (inputText.includes('-')) {
    // Check if the delimiters are part of a table
    if (inputText.split('\n').some(line => line.split('-').length > 1)) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
