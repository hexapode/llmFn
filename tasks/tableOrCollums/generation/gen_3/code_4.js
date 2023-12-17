
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to check for patterns indicating tables or columns
  const tablePattern = /(?:\s{2,}\S+\s{2,}){2,}/; // Pattern for detecting a table structure
  const columnPattern = /(\S+\s{2,})+/; // Pattern for detecting columns

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
