
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains keywords related to table or columns
  if (inputText.match(/\btable\b/i)) {
    if (inputText.match(/\bcolumns\b/i)) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (inputText.match(/\bcolumns\b/i)) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
