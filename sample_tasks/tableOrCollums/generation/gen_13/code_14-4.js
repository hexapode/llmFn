
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  var lines = inputText.split('\n'); // Split the input into lines
  var isTable = true;
  var isColumns = true;

  for (var i = 0; i < lines.length; i++) {
    if (!lines[i].includes('|')) {
      isTable = false;
    }
    if (!lines[i].includes('-')) {
      isColumns = false;
    }
  }

  if (isTable && isColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (isTable) {
    return 'TABLE';
  } else if (isColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
