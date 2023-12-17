
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  const lines = inputText.split('\n').map(line => line.trim());
  const columnWidths = lines.map(line => line.length);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check the variance of column widths to determine if it's more likely to be columns
    const columnWidthVariance = calculateVariance(columnWidths);
  
    if (columnWidthVariance < 2) {
      return "TABLE";
    } else {
      return "COLUMNS";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}

function calculateVariance(arr) {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const variance = arr.reduce((acc, val) => acc + (val - mean) ** 2, 0) / arr.length;
  return variance;
}
