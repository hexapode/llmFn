
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the number of occurrences of '|' and '-' are relatively high
    const pipeCount = (inputText.match(/\|/g) || []).length;
    const hyphenCount = (inputText.match(/-/g) || []).length;
    if (pipeCount > 3 && hyphenCount > 3) {
      return 'TABLE_AND_COLUMNS';
    }
  }
  
  // If not a table and columns, check if it contains only '-'
  if (inputText.includes('-') && !inputText.includes('|')) {
    return 'TABLE';
  }

  // If not a table, and no '-', check if it contains only '|'
  if (inputText.includes('|') && !inputText.includes('-')) {
    return 'COLUMNS';
  }

  // Otherwise, return 'NORMAL'
  return 'NORMAL';
}
