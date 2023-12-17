
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  let hasRows = false;
  let hasColumns = false;
  let rowCount = 0;
  let columnCount = 0;

  // Iterate through each line of text
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if the line contains multiple words separated by spaces
    if (line.split(/\s+/).length > 1) {
      hasColumns = true;
      const lineColumnCount = line.split(/\s+/).length;
      // If it's the first line with columns, save the number of columns as reference
      if (columnCount === 0) {
        columnCount = lineColumnCount;
      } else {
        // If subsequent lines have a different number of columns, it's not a table
        if (lineColumnCount !== columnCount) {
          hasColumns = false;
          break;
        }
      }
    }
    
    // Check if the line contains a percentage sign, which indicates a potential table row
    if (line.includes("%")) {
      hasRows = true;
      rowCount++;
    }
  }

  // If the text contains both rows and columns, it's likely a table and columns
  if (hasRows && hasColumns) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only columns without multiple rows, it's classified as "COLUMNS"
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If there are multiple rows without columns, it's considered a "TABLE"
  else if (hasRows) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
