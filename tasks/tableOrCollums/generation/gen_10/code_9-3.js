
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if the text contains grid-like layout for a table
  const hasTableLayout = lines.every(line => /^\s*\|.*\|\s*$/.test(line));
  // Check if the text contains grid-like layout for columns
  const hasColumnsLayout = lines.every(line => /\s{2,}/.test(line));
  
  if (hasTableLayout && hasColumnsLayout) {
    return "TABLE_AND_COLUMNS";
  } else if (hasTableLayout) {
    return "TABLE";
  } else if (hasColumnsLayout) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
