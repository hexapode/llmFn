
function doesItContainTableOrColumns(text) {
  // Check if the text contains keywords that indicate a table
  if (text.includes("TABLE") || text.includes("Rows") || text.includes("Columns")) {
    if (text.includes("Rows") && text.includes("Columns")) {
      return "TABLE_AND_COLUMNS";
    }
    return "TABLE";
  }

  // Check if the text contains keywords that indicate columns
  if (text.includes("Columns") || text.includes("Column 1") || text.includes("Column 2")) {
    return "COLUMNS";
  }

  // If none of the above conditions are met, classify the text as normal
  return "NORMAL";
}
