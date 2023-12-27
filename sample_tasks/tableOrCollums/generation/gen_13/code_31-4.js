
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Additional checks for special cases where '|' and '-' might appear in normal text
    if (inputText.split('\n').some(line => line.trim().startsWith('|') || line.trim().startsWith('-'))) {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    // Additional checks for special cases where '|' might appear in normal text
    if (inputText.split('\n').some(line => line.trim().startsWith('|'))) {
      return 'COLUMNS';
    }
  } else if (inputText.includes('-')) {
    // Additional checks for special cases where '-' might appear in normal text
    if (inputText.split('\n').some(line => line.trim().startsWith('-'))) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
