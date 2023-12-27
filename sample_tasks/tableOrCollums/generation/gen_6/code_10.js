
function doesItContainTableOrColumns(text) {
  // Check for repeating patterns of characters that resemble table structures
  const hasTablePatterns = /(\S+\s\S+\s)+\S+\s*\|\s*(\S+\s\S+\s)+\S+/g.test(text);
  
  // Check for consistent column alignment
  const hasColumnAlignment = text.split('\n').every(row => {
    const rowColumns = row.trim().split(/\s{2,}/);
    return rowColumns.length > 1 && new Set(rowColumns.map(col => col.length)).size === 1;
  });

  // Determine the classification based on the analysis
  if (hasTablePatterns && hasColumnAlignment) {
    return "TABLE_AND_COLUMNS";
  } else if (hasTablePatterns) {
    return "TABLE";
  } else if (hasColumnAlignment) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
