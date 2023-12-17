
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|')) {
    if (inputText.split('\n')[0].trim().includes('|')) {
      return 'TABLE';
    } else {
      return 'COLUMNS';
    }
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
