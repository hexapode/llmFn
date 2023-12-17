
function doesItContainTableOrColumns(inputText) {
  // Since the input text doesn't contain any typical table or columns delimiters, we can simply check if it matches a typical table structure
  const lines = inputText.split('\n');
  const numOfColumns = lines[0].split(' ').length;
  for (let i = 1; i < lines.length; i++) {
    const columnsInLine = lines[i].split(' ').length;
    if (columnsInLine !== numOfColumns) {
      return 'NORMAL';
    }
  }
  if (numOfColumns > 1) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
