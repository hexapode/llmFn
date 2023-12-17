
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the | and - characters are part of a potential table formatting
    // If not, then inputText does not contain a table or columns
    if (inputText.split('|').length < 3 && inputText.split('-').length < 3) {
      return 'NORMAL';
    }
    // If there are more than 3 columns, then it's likely a table and columns
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
