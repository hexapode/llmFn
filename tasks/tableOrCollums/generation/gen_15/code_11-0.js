
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check if the input text contains characteristic table or column structure
    const tableStructure = /[\s\S]*?([\w\d\s\-_.,:;()"'%]+?)\s+([\w\d\s\-_.,:;()"'%]+)\s+([\w\d\s\-_.,:;()"'%]+)[\s\S]*?/i.test(inputText);
    const columnStructure = /([\w\d\s\-_.,:;()"'%]+)[\s\S]*\n([\w\d\s\-_.,:;()"'%]+)[\s\S]*\n([\w\d\s\-_.,:;()"'%]+)/i.test(inputText);

    if (tableStructure && columnStructure) {
      return "TABLE_AND_COLUMNS";
    } else if (tableStructure) {
      return "TABLE";
    } else if (columnStructure) {
      return "COLUMNS";
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
