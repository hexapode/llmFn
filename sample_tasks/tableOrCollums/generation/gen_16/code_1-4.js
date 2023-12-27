
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  // ... Your code here ...
  // Return TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL
  if (inputText.includes('|') && inputText.includes('-')) {
    return "TABLE_AND_COLUMNS";
  } else if (inputText.includes('|')) {
    return "COLUMNS";
  } else if (inputText.includes('-')) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
