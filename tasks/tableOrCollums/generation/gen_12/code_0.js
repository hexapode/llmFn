
function doesItContainTableOrColumns(text) {
  // Check if the text contains "TABLE" or "COLUMNS" keywords
  if (text.includes("TABLE") && text.includes("COLUMNS")) {
    return "TABLE_AND_COLUMNS";
  } else if (text.includes("TABLE")) {
    return "TABLE";
  } else if (text.includes("COLUMNS")) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
