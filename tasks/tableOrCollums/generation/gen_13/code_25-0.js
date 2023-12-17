
function doesItContainTableOrColumns(inputText) {
  // Check if there are any typical indicators of a table or columns in the inputText
  let lines = inputText.split('\n');
  let hasTable = false;
  let hasColumns = false;

  // Check if any line contains a pattern that looks like a table
  for (let line of lines) {
    if (line.includes('|') && line.includes('-')) {
      hasTable = true;
      break;
    }
  }

  // Check if any line contains a pattern that looks like columns
  for (let line of lines) {
    if (line.includes('|')) {
      hasColumns = true;
      break;
    }
  }

  // Return the appropriate classification
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
