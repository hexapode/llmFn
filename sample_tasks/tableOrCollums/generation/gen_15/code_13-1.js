
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check if there are more instances of "td" compared to "tr" to determine if it's mainly columns
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;
  
    // Additionally check for specific keywords related to both table and columns
    const containsTableAndColumnsKeywords = /(innovating|research|safer|chemical|alternatives|harmful|substances|evaluating|manufacture|developing|reduce|remove|chem|safer|alternative|suppliers|developing|rigorous|performance|inventing|replace|thermoplastic|elastomers|phased|solder|multiplying|stride|minimizing|strain|transition| chains|green|chemistry|circular|material|progress)/i.test(inputText)

    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
