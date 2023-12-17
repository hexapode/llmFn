
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Updated the condition to check for column-like structure
  if (inputText.includes('|') && inputText.includes('    ')) {
    return 'COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
