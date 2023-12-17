
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the dash '-' occurs before the pipe '|'
    if (inputText.indexOf('-') < inputText.indexOf('|')) {
      return 'COLUMNS';
    } else {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
