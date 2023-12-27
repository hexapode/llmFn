
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the delimiters are part of the text or part of a table/columns
    if (inputText.split('|').length > 2 || inputText.split('-').length > 2) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|') && inputText.split('|').length > 2) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.split('-').length > 2) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
