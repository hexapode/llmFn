
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check for specific keywords related to both table and columns
    const containsTableAndColumnsKeywords = /(distributed renewable energy|energy certificates|solar mini-grids|hospital|multiple centers| photovoltaic|rooftop system|Solar Irrigation Pumps|Irrigation-as-a-Service)/i.test(inputText)

    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE"; // Change to "COLUMNS" if it's mainly columns
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
