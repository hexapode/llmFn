
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if there are enough occurrences of | and - to indicate a table
    let lines = inputText.split('\n');
    let firstLine = lines[0].trim();
    let secondLine = lines[1].trim();

    if (firstLine.includes('|') && secondLine.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
