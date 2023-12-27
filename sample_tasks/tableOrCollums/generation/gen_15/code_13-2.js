
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check for specific keywords related to both table and columns
    const containsTableAndColumnsKeywords = /(innovating|research|safer|chemical|alternatives|harmful|substances|evaluating|manufacture|developing|reduce|remove|chem|safer|alternative|suppliers|developing|rigorous|performance|inventing|replace|thermoplastic|elastomers|phased|solder|multiplying|stride|minimizing|strain|transition| chains|green|chemistry|circular|material|progress)/i.test(inputText)

    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "NORMAL";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
