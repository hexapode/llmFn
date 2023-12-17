
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.split('\n')[0].includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
