
function doesItContainTableOrColumns(inputText) {
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check for the presence of both '|' and '-' to determine if it's a table and columns
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    // Remove checking for '|' as the pipe symbol by itself does not necessarily represent columns
    return 'NORMAL';
  } else if (inputText.includes('-')) {
    // Check for the presence of '-' to determine if it's a column
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
