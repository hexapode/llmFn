
function doesItContainTableOrColumns(inputText) {
  // Check for the presence of table-like structure
  if (inputText.includes('|') || inputText.includes('+') || inputText.includes('-')) {
    // Check for the presence of column-like structure
    if (inputText.includes('\t')) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'TABLE';
    }
  } else if (inputText.includes('\t')) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
