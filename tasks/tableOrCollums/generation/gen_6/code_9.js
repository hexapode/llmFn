
function doesItContainTableOrColumns(text) {
  // Check if the text contains typical table features such as rows and columns
  if (text.includes('|') || text.includes('+') || text.includes('-')) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const columnCount = lines[0].trim().split(/\s{2,}/).length;
  if (lines.slice(1).every(row => row.trim().split(/\s{2,}/).length === columnCount)) {
    return "COLUMNS";
  }

  // Check if the text contains both table and columnar structure
  if (text.includes('|') && lines.slice(1).every(row => row.trim().split(/\s{2,}/).length === columnCount)) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
