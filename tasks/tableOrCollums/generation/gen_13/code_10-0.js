
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('\n') && (inputText.includes('|') || inputText.includes('  '))) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
