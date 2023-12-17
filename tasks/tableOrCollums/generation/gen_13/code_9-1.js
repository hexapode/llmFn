
function doesItContainTableOrColumns(inputText) {
  // Check for patterns resembling tables or columns
  if (inputText.match(/^\s*[\w\s]+\s+\|\s+[\w\s]+\s*$/m)) {
    return 'COLUMNS';
  } else if (inputText.match(/^\s*[\w\s-]+\s+\|\s+[\w\s-]+\s*$/m)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
