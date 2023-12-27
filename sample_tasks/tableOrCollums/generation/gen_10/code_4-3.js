
function doesItContainTableOrColumns(text) {
  // Check for a pattern resembling a table
  if (/\s+\w+(\s+\w+)+\s*(\|\s*\w+(\s+\w+)*\s*)+/g.test(text)) {
    return "TABLE";
  }
  // Check for a pattern resembling columns
  else if (/\s*\w+(\s+\w+)*\s*\n\s*\-{3,}\s*\n(\s*\w+(\s+\w+)*\s*\n)+/g.test(text)) {
    return "COLUMNS";
  }
  // If none of the above patterns are found, return "NORMAL"
  else {
    return "NORMAL";
  }
}
