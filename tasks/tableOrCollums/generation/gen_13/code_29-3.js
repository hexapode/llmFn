
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the delimiters are more separated than typical columns
    if (inputText.split('|').length > 1 && inputText.split('-').length > 1) {
      return 'TABLE_AND_COLUMNS';
    } else if (inputText.split('|').length > 1) {
      return 'COLUMNS';
    } else {
      return 'TABLE';
    }
  } else {
    return 'NORMAL';
  }
}
