
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains specific indicators of columns
  if (inputText.match(/^\s{2,}\S.*\n\s{2,}\S.*\n\s{2,}\S/gm)) {
    return 'COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
