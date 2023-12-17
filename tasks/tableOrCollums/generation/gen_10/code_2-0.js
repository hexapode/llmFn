
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check for patterns resembling tabular data
  for (let line of lines) {
    // Check for consistent spacing or delimiter characters
    if (line.match(/\s{2,}/) || line.includes('|') || line.includes('-')) {
      return "TABLE_OR_COLUMNS";
    }
    // Check for consistent vertical alignment (optional)
    // Insert vertical alignment check logic here
  }

  return "NORMAL";
}
