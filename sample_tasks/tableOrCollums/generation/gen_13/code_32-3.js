
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Adjust the condition to properly identify columns
  if (inputText.includes('|') && inputText.includes('\n')) {
    return 'COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
