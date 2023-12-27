
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  const tableRegex = /\bProject Name\s+Country\s+Project Type\s+Project Benefits\s+Vendor\s+Tonnes\b/;
  const columnsRegex = /\bProject Name\s+Country\s+Project Type\s+Project Benefits\s+Vendor\s+Tonnes\b/;

  if (tableRegex.test(inputText) && columnsRegex.test(inputText)) {
    return "TABLE_AND_COLUMNS";
  } else if (tableRegex.test(inputText)) {
    return "TABLE";
  } else if (columnsRegex.test(inputText)) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
