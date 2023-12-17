
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  const lineLengths = lines.map(line => line.trim().length);

  if (lineLengths.every(length => length > 0 && length === lineLengths[0])) {
    return 'COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
