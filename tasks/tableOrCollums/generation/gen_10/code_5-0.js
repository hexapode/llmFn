
function doesItContainTableOrColumns(text) {
  // Remove all the non-alphanumeric characters
  const cleanText = text.replace(/[^a-zA-Z0-9\s]/g, '');
  // Split the text into lines
  const lines = cleanText.split('\n');
  //Check if lines contain columns
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
   // If the text contains the word "table" and no columns, return "TABLE"
  if (cleanText.toLowerCase().includes("table") && !hasColumns) {
    return "TABLE";
  }
  //If lines contain columns but no "table" word, return "COLUMNS"
  else if (hasColumns && !cleanText.toLowerCase().includes("table")) {
    return "COLUMNS";
  }
  // If the text contains the word "table" and also has columns, return "TABLE_AND_COLUMNS"
  else if (cleanText.toLowerCase().includes("table") && hasColumns) {
    return "TABLE_AND_COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
