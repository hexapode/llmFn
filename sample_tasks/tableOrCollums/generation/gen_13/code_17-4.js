
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters while accounting for layout
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check for the presence of multiple columns structure
    let lines = inputText.split('\n');
    let columnCount = lines[0].split(/\s{2,}/).length;
    if (columnCount > 1) {
      return 'TABLE_AND_COLUMNS';
    }
  }
  
  // Check for individual delimiters separately to correctly identify the layout
  let hasTable = inputText.includes('-') && !inputText.includes('|');
  let hasColumns = inputText.includes('|') && !inputText.includes('-');
  
  if (hasColumns && !hasTable) {
    return 'COLUMNS';
  } else if (hasTable && !hasColumns) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
