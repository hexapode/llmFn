
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains both table and columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else if (inputText.includes('-')) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
