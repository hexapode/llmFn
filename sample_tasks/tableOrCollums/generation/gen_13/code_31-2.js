
function doesItContainTableOrColumns(inputText) {
  // Check if the inputText contains typical table or columns delimiters
  var lines = inputText.split('\n');
  var containsTable = false;
  var containsColumns = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    // Check for typical table delimiter
    if (line.includes('|') && line.includes('-')) {
      containsTable = true;
    } else if (line.includes('|')) {
      // Check for typical columns delimiter
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
