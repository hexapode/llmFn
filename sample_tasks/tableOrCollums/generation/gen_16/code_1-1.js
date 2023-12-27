
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  let lines = inputText.split('\n');
  let tableCount = 0;
  let columnCount = 0;
  
  for (let line of lines) {
    if (line.includes('Table')) {
      tableCount++;
    }
    if (line.split(/\s{2,}/).length > 1) {
      columnCount++;
    }
  }

  if (tableCount > 0 && columnCount > 0) {
    return 'TABLE_AND_COLUMNS';
  } else if (tableCount > 0) {
    return 'TABLE';
  } else if (columnCount > 0) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
