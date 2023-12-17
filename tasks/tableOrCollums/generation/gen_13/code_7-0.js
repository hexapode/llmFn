
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Checking for '|' and '-' near each other to determine it is a table, else just columns
  if (inputText.includes('|') && inputText.includes('-') && Math.abs(inputText.indexOf('|') - inputText.indexOf('-')) <= 20) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
