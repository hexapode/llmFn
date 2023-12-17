
function doesItContainTableOrColumns(text) {
  const rows = text.split('\n');
  const columnCounts = rows.map(row => row.trim().split(/\s{2,}/).length);
  
  // Check if the text contains typical table features such as rows and columns
  if (text.includes('|') || text.includes('+') || text.includes('-') || columnCounts.some(count => count > 1)) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  if (columnCounts.every(count => count > 1)) {
    return "COLUMNS";
  }

  // Check if the text contains both table and columnar structure
  if (text.includes('|') && columnCounts.every(count => count > 1)) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
