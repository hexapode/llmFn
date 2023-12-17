
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check if the text contains table-like structure
  if (text.includes('|') || text.includes('+') || text.includes('-')) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  if (lines.some(line => line.includes(':'))) {
    return "COLUMNS";
  }

  // Check if the text contains both table and columnar structure
  if ((text.includes('|') || text.includes('-')) && lines.some(line => line.includes(':'))) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
