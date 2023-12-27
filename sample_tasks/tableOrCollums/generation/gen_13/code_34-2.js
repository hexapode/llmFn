
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Use regex to look for patterns that may indicate a table or columns
  const tableRegex = /^\s*[a-zA-Z0-9|\-. ]+\s*\n[a-zA-Z0-9|\-. ]+\s*\n[a-zA-Z0-9|\-. ]+\s*\n/;
  const columnsRegex = /^\s*[a-zA-Z0-9|\-. ]+\s*\n[a-zA-Z0-9|\-. ]+\s*\n/;
  
  if (tableRegex.test(inputText)) {
    return 'TABLE';
  } else if (columnsRegex.test(inputText)) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
