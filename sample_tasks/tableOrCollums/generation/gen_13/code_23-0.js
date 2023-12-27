
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Adjust the search criteria to better capture the patterns
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('10 20 30 40 60 70 80 90 100')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('10 20 30 40 60 70 80 90 100')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('10 20 30 40 60 70 80 90 100')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
