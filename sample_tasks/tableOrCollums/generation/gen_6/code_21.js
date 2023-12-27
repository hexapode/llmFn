
function doesItContainTableOrColumns(text) {
  // Check if the text contains typical table features such as rows and columns
  if (text.includes('|') && text.includes('-')) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  if (text.split('\n').every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "COLUMNS";
  }

  // Check if the text contains both table and columnar structure
  if (text.includes('|') && text.includes('-') && text.split('\n').every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
