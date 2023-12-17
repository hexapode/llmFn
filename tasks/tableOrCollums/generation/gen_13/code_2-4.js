
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters in a more accurate way
  const lines = inputText.split('\n');
  let hasTable = false;
  let hasColumns = false;
  
  for (const line of lines) {
    // Check if the line contains dashes and pipes to determine if it's a table or columns
    if (line.includes('|') && line.includes('-')) {
      hasTable = true;
    } else if (line.includes('|')) {
      hasColumns = true;
    }
  }

  if (hasTable && hasColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (hasTable) {
    return 'TABLE';
  } else if (hasColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
