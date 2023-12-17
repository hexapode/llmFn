
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the delimiters are meaningful within the text content
    if (inputText.split('\n').some(line => line.includes('|')) && inputText.split('\n').some(line => line.includes('-'))) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    // Check if the delimiters are meaningful within the text content
    if (inputText.split('\n').some(line => line.includes('|'))) {
      return 'COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('-')) {
    // Check if the delimiters are meaningful within the text content
    if (inputText.split('\n').some(line => line.includes('-'))) {
      return 'TABLE';
    } else {
      return 'NORMAL';
    }
  } else {
    return 'NORMAL';
  }
}
