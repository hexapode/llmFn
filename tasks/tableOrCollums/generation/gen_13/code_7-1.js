
function doesItContainTableOrColumns(inputText) {
  // Split the inputText into lines
  const lines = inputText.split('\n');
  
  // Check if any line contains '|' character, which indicates columns
  const hasColumns = lines.some(line => line.includes('|'));

  // Check if any line contains '-' character, which indicates a table
  const hasTable = lines.some(line => line.includes('-'));

  // Determine the result based on the presence of columns and/or table
  if (hasColumns && hasTable) {
    return 'TABLE_AND_COLUMNS';
  } else if (hasColumns) {
    return 'COLUMNS';
  } else if (hasTable) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
