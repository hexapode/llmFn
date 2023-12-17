
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains typical patterns of a table or columns
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('        ')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('        ')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('        ')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
