
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for typical table or column patterns
  const tablePattern = /\+.*\+.*\+.*\+/;
  const columnPattern = /^\|.+\|/;
  
  if (tablePattern.test(inputText) && columnPattern.test(inputText)) {
    return "TABLE_AND_COLUMNS";
  } else if (tablePattern.test(inputText)) {
    return "TABLE";
  } else if (columnPattern.test(inputText)) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
