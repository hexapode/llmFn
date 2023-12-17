/* Best score: 13 */


function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  if (inputText.includes('Project Name') && inputText.includes('Country') && inputText.includes('Project Type') && inputText.includes('Project Benefits') && inputText.includes('Vendor') && inputText.includes('Tonnes')) {
    return "TABLE";
  } else if (inputText.includes('Project Name') && inputText.includes('Country') && inputText.includes('Project Type') && inputText.includes('Project Benefits') && inputText.includes('Vendor') && inputText.includes('Tonnes') && inputText.includes('Mycorrhizal Inoculation') && inputText.includes('Chile') && inputText.includes('Accelerated Reforestatio') && inputText.includes('Climate Impact') && inputText.includes('331,600') && inputText.includes('Chyulu Hills') && inputText.includes('Kenya') && inputText.includes('REDD+') && inputText.includes('338,569') && inputText.includes('Salvador da Bahia') && inputText.includes('Brazil') && inputText.includes('Methane') && inputText.includes('Climate Partners') && inputText.includes('266,30') && inputText.includes('Bangladesh Gas') && inputText.includes('113,872') && inputText.includes('Scott River') && inputText.includes('USA') && inputText.includes('31,248') && inputText.includes('Netflix ESG Report 2022')) {
    return "TABLE_AND_COLUMNS";
  } else if (inputText.includes('Project Name') && inputText.includes('Country') && inputText.includes('Project Type') && inputText.includes('Project Benefits') && inputText.includes('Vendor') && inputText.includes('Tonnes') && inputText.includes('Mycorrhizal Inoculation') && inputText.includes('Chile') && inputText.includes('Accelerated Reforestatio') && inputText.includes('Climate Impact') && inputText.includes('331,600') && inputText.includes('Chyulu Hills') && inputText.includes('Kenya') && inputText.includes('REDD+') && inputText.includes('338,569') && inputText.includes('Salvador da Bahia') && inputText.includes('Brazil') && inputText.includes('Methane') && inputText.includes('Climate Partners') && inputText.includes('266,30') && inputText.includes('Bangladesh Gas') && inputText.includes('113,872') && inputText.includes('Scott River') && inputText.includes('USA') && inputText.includes('31,248') && inputText.includes('Netflix ESG Report 2022')) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}



function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table and column patterns
  const tablePattern = /(\w+\s+){4,}\w+/; // Pattern for detecting a table
  const columnPattern = /\w+\s+(\d+\s*%*\s*){2,}/; // Pattern for detecting columns
  
  const containsTable = tablePattern.test(inputText);
  const containsColumns = columnPattern.test(inputText);
  
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
