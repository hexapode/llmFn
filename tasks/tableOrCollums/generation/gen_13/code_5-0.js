
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains typical table or columns delimiters in the context of financial statements
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('Financial Statements')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('Financial Statements')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('Financial Statements')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
