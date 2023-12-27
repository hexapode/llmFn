
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains keywords and patterns related to table or columns
  if (inputText.match(/\btable\b/i)) {
    if (inputText.match(/\bcolumns\b/i) || inputText.match(/\n\s{3,}[^\n]+\n\s{3,}[^\n]+/)) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (inputText.match(/\bcolumns\b/i) || inputText.match(/\n\s{3,}[^\n]+\n\s{3,}[^\n]+/)) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
