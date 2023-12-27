
function doesItContainTableOrColumns(inputText) {
  // Check for specific patterns and structure to differentiate between table and columns
  const containsTableStructure = /(\b\|\s+[\w\s\|]*\s+\|\s*\n)+/i.test(inputText);
  const containsColumnsStructure = /(\b[\w\s]+\s+\|\s+[\w\s]+[\|\s]*\n)+/i.test(inputText);

  // Check for specific keywords related to both table and columns
  const containsTableAndColumnsKeywords = /(innovating|research|environmental|responsibility|climate|change|resources|safer|materials|energy|efficiency|operations|renewable|power)/i.test(inputText);

  if (containsTableStructure && containsColumnsStructure) {
    // Check if the input text contains keywords related to both tables and columns
    if (containsTableAndColumnsKeywords) {
      return "Table_And_Columns";
    } else {
      // If the structure resembles both a table and columns, but doesn't contain specific keywords, consider it as a table
      return "Table";
    }
  } else if (containsTableStructure) {
    return "Table";
  } else if (containsColumnsStructure) {
    return "Columns";
  } else {
    return "Normal";
  }
}
