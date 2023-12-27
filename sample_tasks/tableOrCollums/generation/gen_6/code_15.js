
function doesItContainTableOrColumns(text) {
  // Create an array of rows
  const rows = text.trim().split('\n');

  // Check if the text contains typical table features such as rows and columns
  if (rows.every(row => row.includes('|') || row.includes('+') || row.includes('-'))) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  if (rows.every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "COLUMNS";
  }

  // Check if the text contains both table and columnar structure
  if (rows.some(row => row.includes('|')) && rows.every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
