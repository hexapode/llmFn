
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters more accurately
  const lines = inputText.split('\n');
  const firstLine = lines[0].trim();
  const secondLine = lines[1] ? lines[1].trim() : '';

  if (firstLine.includes(' ') && secondLine.includes(' ')) {
    return 'COLUMNS';
  } else if (firstLine.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
