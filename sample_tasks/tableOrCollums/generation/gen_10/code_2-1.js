
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check for the presence of columns by analyzing the patterns in the text
  let containsColumns = false;
  for (let i = 0; i < lines.length - 1; i++) {
    // Check if the current line and the next line have the same number of delimiter characters
    const currentLineDelimiters = lines[i].split(/[ \t]+|,|;|\|/).length;
    const nextLineDelimiters = lines[i + 1].split(/[ \t]+|,|;|\|/).length;
    if (currentLineDelimiters === nextLineDelimiters) {
      containsColumns = true;
      break;
    }
  }

  // Check for the presence of the word "table"
  const containsTable = text.toLowerCase().includes("table");

  // Determine the result based on the presence of table and/or columns
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
