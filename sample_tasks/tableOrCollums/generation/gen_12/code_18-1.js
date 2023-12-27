
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check for the presence of clear table structure
  const containsTableStructure = lines.some(line => line.includes("Release Details") && line.includes("Responsible Release Strategy"));
  if (containsTableStructure) {
    return "TABLE";
  }

  // Check for the presence of clear columns structure
  const containsColumnsStructure = lines.some(line => line.includes("Responsible Release.") && line.includes("Large Language Models."));
  if (containsColumnsStructure) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  // Check for the absence of clear table or column structure
  const containsTableOrColumns = lines.some(line => line.includes("TABLE") || line.includes("COLUMNS"));
  if (containsTableOrColumns) {
    return "TABLE_AND_COLUMNS";
  }

  // If the text does not match the table, column, or table_and_column structure, return "NORMAL"
  return "NONE";
}
