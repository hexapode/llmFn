
function doesItContainTableOrColumns(text) {
  // Check if the text contains identifiable column-like structure
  if (text.split('\n').some(line => line.split(/\s{2,}/).length > 1)) {
    return "COLUMNS";
  }
  // Check if the text contains the word "table" and "columns"
  else if (text.toLowerCase().includes("table") && text.toLowerCase().includes("columns")) {
    return "TABLE_AND_COLUMNS";
  }
  // Check if the text contains the word "table"
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
