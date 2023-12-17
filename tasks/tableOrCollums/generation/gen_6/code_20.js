
function doesItContainTableOrColumns(text) {
  // Use NLP techniques and pre-trained models to classify the text
  // This example uses a simplified approach for demonstration purposes
  // In practice, this would involve using a trained NLP model
  
  // Assume the text contains a table
  let containsTable = true;
  
  // Assume the text contains columns
  let containsColumns = true;

  // If the text does not contain any clear table or column patterns
  if (!containsTable && !containsColumns) {
    return "NORMAL";
  }
  
  // If the text contains both table and column structures
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  }

  // If the text contains only table structure
  if (containsTable) {
    return "TABLE";
  }

  // If the text contains only column structure
  if (containsColumns) {
    return "COLUMNS";
  }
}
