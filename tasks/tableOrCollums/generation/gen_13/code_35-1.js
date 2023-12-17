
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  let lines = inputText.split('\n');
  let potentialTable = false;
  let potentialColumns = false;

  for (let line of lines) {
    if (line.includes('|') && line.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    } else if (line.includes('|')) {
      potentialColumns = true;
    } else if (line.includes('-')) {
      potentialTable = true;
    }
  }

  if (potentialTable && potentialColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (potentialTable) {
    return 'TABLE';
  } else if (potentialColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}

