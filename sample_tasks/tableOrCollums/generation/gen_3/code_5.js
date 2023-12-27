
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to check for patterns indicating tables or columns
  const tablePattern = /(\b\w{2,}\b\s{2,}){3,}/; // Pattern for detecting a table structure
  const columnPattern = /(\b\w{2,}\b\s{2,})+/; // Pattern for detecting columns

  if (tablePattern.test(inputText) && columnPattern.test(inputText)) {
    return "TABLE_AND_COLUMNS";
  } else if (tablePattern.test(inputText)) {
    return "TABLE";
  } else if (columnPattern.test(inputText)) {
    return "COLUMNS";
  } else {
    return "NORMAL"; // Return "NORMAL" when there are no distinct tables or columns
  }
}
