
function doesItContainTableOrColumns(text) {
  // Check if the text contains the word "table" and "columns"
  if (text.toLowerCase().includes("table") && text.toLowerCase().includes("columns")) {
    return "TABLE_AND_COLUMNS";
  }
  // Check if the text contains the word "table"
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // Check if the text contains the word "columns" (including as part of a larger word)
  else if (/\bcolumns\b/i.test(text)) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
