
function doesItContainTableOrColumns(inputText) {
  // Split the inputText into lines
  const lines = inputText.split('\n').map(line => line.trim());

  // Check for the presence of multiple rows and columns
  const hasMultipleRows = lines.length > 2;
  const hasMultipleColumns = lines.some(line => line.includes('|'));

  // Classify based on the structure
  if (hasMultipleRows && hasMultipleColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (hasMultipleColumns) {
    return 'COLUMNS';
  } else if (hasMultipleRows) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
