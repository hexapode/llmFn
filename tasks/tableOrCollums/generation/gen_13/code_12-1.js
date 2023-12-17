
function doesItContainTableOrColumns(inputText) {
  // Convert the inputText to lowercase to make the check case-insensitive
  inputText = inputText.toLowerCase();

  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|')) {
    // Check for additional indicator of table by looking for '-' right after '|'
    if (inputText.includes('|-')) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'COLUMNS';
    }
  } else if (inputText.includes('-')) {
    // Check for additional indicator of table by looking for '|' right after '-'
    if (inputText.includes('-|')) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'TABLE';
    }
  } else {
    return 'NORMAL';
  }
}
