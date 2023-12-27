
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns patterns
  if (/\|[\w\s]+\|/.test(inputText) && /(\-[\s\-]+\n)+\-[\s\-]+/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|[\w\s]+\|/.test(inputText)) {
    return 'COLUMNS';
  } else if (/(\-[\s\-]+\n)+\-[\s\-]+/.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
