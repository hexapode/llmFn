
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters with some additional checks for table-like structure
  if (inputText.includes('|') && inputText.includes('-')) {
    let lines = inputText.split('\n');
    let hasColumnHeaders = false;
    let hasRowHeaders = false;
    for (let line of lines) {
      if (line.trim().startsWith('|') || line.trim().startsWith('-')) {
        hasColumnHeaders = true;
      }
      if (line.includes('vs.') || line.includes('VS.')) {
        hasRowHeaders = true;
      }
    }
    if (hasColumnHeaders && hasRowHeaders) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'TABLE';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
