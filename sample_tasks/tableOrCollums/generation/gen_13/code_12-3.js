
function doesItContainTableOrColumns(inputText) {
  // Split the text into lines
  const lines = inputText.split('\n').filter(line => line.trim() !== '');
  
  // Determine if the input text contains a table, columns, or both based on patterns and structure
  let containsTable = false;
  let containsColumns = false;

  for (let line of lines) {
    // Check if the line contains dashes and has consistent spacing
    if (line.match(/^\s*\S+(\s+-+\s+\S+)+\s*$/)) {
      containsTable = true;
    }
    
    // Check if the line contains vertical bars and has consistent spacing
    if (line.match(/^\s*\S+(\s+\|\s+\S+)+\s*$/)) {
      containsColumns = true;
    }
  }
  
  if (containsTable && containsColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsTable) {
    return 'TABLE';
  } else if (containsColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
