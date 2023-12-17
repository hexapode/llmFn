
function doesItContainTableOrColumns(text) {
  // Check if the text contains a pattern resembling a table
  if (text.match(/^\s{2,}.*\s{2,}.*\s{2,}$/m)) {
    return "TABLE";
  }
  // Check if the text contains a pattern resembling columns
  else if (text.match(/^\s{2,}.*\s{2,}.*$/m)) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
