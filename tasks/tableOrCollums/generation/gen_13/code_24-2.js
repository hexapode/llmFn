
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Perform additional check to differentiate between table and normal text
    if (inputText.split('\n').some(line => line.includes('|') && line.includes('-'))) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
