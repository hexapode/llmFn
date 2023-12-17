
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Checking if there are enough table-like characters to be considered a table
    let pipeCount = inputText.split('|').length - 1;
    let dashCount = inputText.split('-').length - 1;
    if (pipeCount > 1 && dashCount > 1) {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } 
  // If none of the conditions are met, then return NORMAL
  return 'NORMAL';
}
