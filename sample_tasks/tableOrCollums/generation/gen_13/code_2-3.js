
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains typical table-like patterns
  if (inputText.match(/\b\w+\s+(?:[A-Z][a-z]*\s+)*[A-Z][a-z]*\s*:\s+(.*?)\b/g)) {
    return 'COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
