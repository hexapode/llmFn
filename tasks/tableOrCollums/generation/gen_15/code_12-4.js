
function doesItContainTableOrColumns(inputText) {
  // Check for specific patterns to differentiate between table and columns
  const containsTable = /\b(table|thead|tbody|th|tr|td)\b/i.test(inputText);
  const containsColumns = /\b(column|col|row|cell)\b/i.test(inputText);

  // Additional keywords related to both table and columns to be considered
  const containsTableAndColumnsKeywords = /\b(innovating|research|safer|chemical|alternatives|harmful|substances|evaluating|manufacture|developing|reduce|remove|chem|safer|alternative|suppliers|developing|rigorous|performance|inventing|replace|thermoplastic|elastomers|phased|solder|multiplying|stride|minimizing|strain|transition| chains|green|chemistry|circular|material|progress)\b/i.test(inputText);

  // Check for specific keywords related to table or columns
  if (containsTable && containsColumns) {
    const tdCount = (inputText.match(/\btd\b/gi) || []).length;
    const trCount = (inputText.match(/\btr\b/gi) || []).length;

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
