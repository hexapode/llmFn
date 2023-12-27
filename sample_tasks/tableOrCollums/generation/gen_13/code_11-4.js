
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if there are enough occurrences of '|' and '-' to be considered a table
    var rows = inputText.split('\n');
    var numberOfColumns = rows[0].split('|').length - 1;
    var isTable = true;
    for (var i = 1; i < rows.length; i++) {
      if (rows[i].split('|').length - 1 !== numberOfColumns) {
        isTable = false;
        break;
      }
    }
    if (isTable) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'NORMAL';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
