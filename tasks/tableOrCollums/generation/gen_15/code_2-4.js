
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check if the input text contains more explicit table-like structure
  const hasExplicitTable = /(\+\-+\+|\|.*\|)/.test(inputText);

  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable || hasExplicitTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
