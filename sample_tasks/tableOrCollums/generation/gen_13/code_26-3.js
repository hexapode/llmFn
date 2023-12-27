
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the occurrence of '-' is very close to '|', if yes then it is a column, else it is a table
    if (inputText.indexOf('|') - inputText.indexOf('-') < 10) {
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
