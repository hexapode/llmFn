
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    if (inputText.split('\n').some(line => line.trim().startsWith('|') || line.trim().includes('|'))) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    if (inputText.split('\n').some(line => line.trim().startsWith('|') || line.trim().includes('|'))) {
      return 'COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
