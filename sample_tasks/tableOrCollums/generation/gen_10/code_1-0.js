
function doesItContainTableOrColumns(text) {
  // Check if the text contains tabular structure
  if (text.includes("|") || text.includes("—") || text.includes("----") || text.includes("||")) {
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
  // Check if the text contains the word "columns"
  else if (text.toLowerCase().includes("columns")) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
