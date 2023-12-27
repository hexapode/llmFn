
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    if (inputText.split('|').length > 1 || inputText.split('-').length > 1) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    if (inputText.split('|').length > 1) {
      return 'COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('-')) {
    if (inputText.split('-').length > 1) {
      return 'TABLE';
    } else {
      return 'NORMAL';
    }
  } else {
    return 'NORMAL';
  }
}
