
function doesItContainTableOrColumns(text) {
  // Check if the text contains the word "table" and "columns"
  if (text.toLowerCase().includes("table") && text.toLowerCase().includes("columns")) {
    return "TABLE_AND_COLUMNS";
  }
  // Check if the text contains the word "table"
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // Check if the text contains the word "columns" within a certain proximity
  else if (text.toLowerCase().indexOf("columns") !== -1 && text.toLowerCase().indexOf("columns") < 50) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
