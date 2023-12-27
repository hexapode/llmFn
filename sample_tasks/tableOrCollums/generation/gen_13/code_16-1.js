
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.match(/[-\s]*\n\s*[\d|]+\s*[-\s]*\n/)) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.match(/[-\s]*\n\s*[\d|]+\s*[-\s]*\n/)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}