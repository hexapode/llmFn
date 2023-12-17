
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Check for tabular patterns
  let hasTabularData = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if there are consistent columns separated by spaces
    if (i > 0 && line.split(/\s+/).length === lines[i - 1].split(/\s+/).length) {
      hasTabularData = true;
      break;
    }
  }

  // If tabular data is found, return TABLE_AND_COLUMNS
  if (hasTabularData) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
