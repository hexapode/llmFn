
function doesItContainTableOrColumns(inputText) {
  // Split the inputText into lines
  const lines = inputText.split('\n');

  // Check if any line contains '|' and each line contains the same number of '|'
  const containsVerticalLines = lines.every(line => line.includes('|') && line.split('|').length > 1);

  // Check if any line contains '-'
  const containsDash = lines.some(line => line.includes('-'));

  if (containsVerticalLines && containsDash) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsVerticalLines) {
    return 'COLUMNS';
  } else if (containsDash) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
