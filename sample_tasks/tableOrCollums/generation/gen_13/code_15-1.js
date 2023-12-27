
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the appearance of '-' is more frequent than '|' to classify it as a table or columns
    const dashesCount = (inputText.match(/-/g) || []).length;
    const pipesCount = (inputText.match(/\|/g) || []).length;
    if (dashesCount > pipesCount) {
      return 'TABLE';
    } else {
      return 'COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
