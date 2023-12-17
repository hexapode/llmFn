
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Added additional logic to check for presence of both '|' and '-' in close proximity
    // to determine if it's a combination of table and columns
    if (inputText.match(/(\|\s*-)|(–\s*\|)/)) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'TABLE';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
