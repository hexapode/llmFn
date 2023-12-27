
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to check for patterns indicating tables or columns
  const tablePattern = /(^\|\s[^\n]+\s\|.*\n)+/;
  const columnPattern = /^(\s*[^\|\n]+\s*\|\s*)+\n/;

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
