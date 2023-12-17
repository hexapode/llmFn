
function doesItContainTableOrColumns(inputText) {
  // Check for specific patterns to differentiate between table and columns
  const rows = inputText.split('\n').map(row => row.trim());
  const tdCount = rows.reduce((acc, row) => acc + (row.split(/\s{2,}/).length - 1), 0);
  const trCount = rows.filter(row => row.match(/(\w+\s{2,})+\w+/g)).length;

  if (tdCount > trCount) {
    return "COLUMNS";
  } else if (trCount > 1) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
