
function doesItContainTableOrColumns(text) {
  // Define regular expressions to match table and column structures
  const tableRegex = /[\-\+|]+\s*[\-\+|]+\s*[\-\+|]+/; // Matches horizontal lines in tables
  const columnRegex = /(?:(?:\s{2,}\S.*)+)/; // Matches multiple columns in a row

  // Check if the text contains a table structure
  if (tableRegex.test(text)) {
    return "TABLE";
  }

  // Check if the text contains a columnar structure
  if (text.split('\n').every(row => columnRegex.test(row))) {
    return "COLUMNS";
  }

  // If it contains both table and column structure
  if (tableRegex.test(text) && text.split('\n').every(row => columnRegex.test(row))) {
    return "TABLE_AND_COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
