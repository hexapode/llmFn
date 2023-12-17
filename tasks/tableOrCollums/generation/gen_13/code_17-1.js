
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if inputText contains more than 3 delimiter lines
    const delimiterLines = inputText.split('\n').filter(line => line.includes('|') || line.includes('-'));
    if (delimiterLines.length > 3) {
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
