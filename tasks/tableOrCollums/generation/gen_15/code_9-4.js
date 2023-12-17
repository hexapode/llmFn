
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // In this case, we'll check for specific keywords related to both table and columns
    const containsTableAndColumnsKeywords = /(fiscal year|priorities|climate change|resources|safer materials|greenhouse gas emissions|renewable sources|renewable energy)/i.test(inputText)

    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "COLUMNS";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
