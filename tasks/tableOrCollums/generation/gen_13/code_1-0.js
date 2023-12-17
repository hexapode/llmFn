
function doesItContainTableOrColumns(inputText) {
  // Split the inputText into lines
  const lines = inputText.split('\n').map(line => line.trim());

  // Check if any line contains multiple words separated by spaces
  const isColumns = lines.some(line => line.split(/\s{2,}/).length > 1);

  // Check if inputText contains '|' and '-' to indicate a table
  const isTable = inputText.includes('|') && inputText.includes('-');

  if (isTable && isColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (isTable) {
    return 'TABLE';
  } else if (isColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
