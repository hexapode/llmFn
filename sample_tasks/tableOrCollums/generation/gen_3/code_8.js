
function doesItContainTableOrColumns(inputText) {
  const tablePattern = /((?:\b\w+\b\s{2,}){2,}.+\n?)+/; // Pattern for detecting a table structure
  const columnPattern = /(\b.+\b\s{2,}\b.+\b\n?)+/; // Pattern for detecting columns

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
