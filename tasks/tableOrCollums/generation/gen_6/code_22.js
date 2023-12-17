
function doesItContainTableOrColumns(text) {
  // Check for consistent left alignment
  if (text.split('\n').every(row => row.startsWith(' '))) {
    return "COLUMNS";
  }

  // Check for consistent center alignment
  if (text.split('\n').every(row => row.trim().startsWith(' '))) {
    return "COLUMNS";
  }

  // Check for consistent right alignment
  if (text.split('\n').every(row => row.endsWith(' '))) {
    return "COLUMNS";
  }

  // If none of the above alignment patterns are consistent, classify as table or mixture of table and columns
  if (text.split('\n').some(row => row.includes('|'))) {
    return "TABLE_OR_MIXTURE";
  }

  // If no consistent pattern is found, classify as normal text
  return "NORMAL";
}
