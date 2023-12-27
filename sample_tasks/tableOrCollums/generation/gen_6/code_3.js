
function doesItContainTableOrColumns(text) {
  // Check if the text contains typical table features such as rows and columns
  if (text.includes('|') && text.includes('-') && text.includes('+') && text.includes('Win') && text.includes('Loss')) {
    return "TABLE_AND_COLUMNS";
  }

  // Check if the text contains typical columnar structure
  if (text.split('\n').every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
