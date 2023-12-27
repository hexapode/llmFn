
function doesItContainTableOrColumns(inputText) {
  // Check for common table patterns
  const containsTablePattern = /\b(\w+\s*\|\s*\w+)+\b/g.test(inputText);
  
  // Check for common column patterns
  const containsColumnPattern = /\b(\w+\s*,\s*\w+)+\b/g.test(inputText);
  
  // Check for specific keywords related to both table and columns
  const containsTableAndColumnsKeywords = /innovating|research|safer|chemical|alternatives|harmful|substances|evaluating|manufacture|developing|reduce|remove|chem|safer|alternative|suppliers|developing|rigorous|performance|inventing|replace|thermoplastic|elastomers|phased|solder|multiplying|stride|minimizing|strain|transition| chains|green|chemistry|circular|material|progress/gi.test(inputText);

  if (containsTablePattern && containsColumnPattern) {
    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else {
      // Determine if it's mainly columns
      const columnCount = (inputText.match(/\|/g) || []).length;
      const rowCount = (inputText.match(/\n/g) || []).length;

      if (columnCount > rowCount) {
        return "COLUMNS";
      } else {
        return "TABLE";
      }
    }
  } else if (containsTablePattern) {
    return "TABLE";
  } else if (containsColumnPattern) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
