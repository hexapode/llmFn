
function doesItContainTableOrColumns(inputText) {
  // Check if the inputText contains a combination of columns and tables
  if (/\s+\|\s+/.test(inputText) && /\s+-+\s+/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\s+\|\s+/.test(inputText)) {
    return 'COLUMNS';
  } else if (/\s+-+\s+/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
