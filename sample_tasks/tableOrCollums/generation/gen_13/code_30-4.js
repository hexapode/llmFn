
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check for more specific conditions to classify as TABLE_AND_COLUMNS
    if (inputText.split('\n').some(line => line.includes('|') && line.includes('-'))) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    // Check for more specific conditions to classify as COLUMNS
    if (inputText.split('\n').some(line => line.includes('|'))) {
      return 'COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('-')) {
    // Check for more specific conditions to classify as TABLE
    if (inputText.split('\n').some(line => line.includes('-'))) {
      return 'TABLE';
    } else {
      return 'NORMAL';
    }
  } else {
    return 'NORMAL';
  }
}
