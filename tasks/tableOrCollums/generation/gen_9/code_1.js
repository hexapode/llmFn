
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains keywords related to table or columns
  if (inputText.match(/\btable\b/i)) {
    if (inputText.match(/^[^ \t\n\r\f\v].*(?:\n[^ \t\n\r\f\v].*)+$/m)) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (inputText.match(/^[^ \t\n\r\f\v].*(?:\n[^ \t\n\r\f\v].*)+$/m)) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
