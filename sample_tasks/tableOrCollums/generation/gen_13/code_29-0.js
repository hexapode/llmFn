
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains typical table or columns delimiters in the specific context
  const lines = inputText.split('\n');
  for (let line of lines) {
    if (line.includes('|') && line.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    } else if (line.includes('|')) {
      return 'COLUMNS';
    }else if (line.includes('-')) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
