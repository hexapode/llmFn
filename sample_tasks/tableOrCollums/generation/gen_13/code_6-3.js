
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the number of occurrences of '|' is significantly higher than '-'
    let pipeCount = (inputText.match(/\|/g) || []).length;
    let hyphenCount = (inputText.match(/-/g) || []).length;
    if (pipeCount > 3 * hyphenCount) {
      return 'COLUMNS';
    } else {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
