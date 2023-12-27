
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  if (/Table \d+:/i.test(inputText)) {
    return "TABLE";
  }
  // ... Other conditions for identifying columns ...
  // Return COLUMNS, TABLE_AND_COLUMNS or NORMAL as needed
  // For now, return NORMAL if no other condition is met
  return "NORMAL";
}
