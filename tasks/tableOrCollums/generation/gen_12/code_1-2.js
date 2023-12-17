
function doesItContainTableOrColumns(text) {
  // Check if the text contains indicators of columns
  const lines = text.split('\n');
  const firstLineLength = lines[0].trim().length;
  const hasRepeatedSeparator = lines.slice(1).every(line => {
    return line.trim().length === firstLineLength && 
           line.trim().startsWith('|') && 
           line.trim().endsWith('|');
  });

  if (hasRepeatedSeparator) {
    return "COLUMNS";
  }

  // Check if the text contains "TABLE" keyword
  if (text.includes("TABLE")) {
    return "TABLE";
  }

  return "NORMAL";
}
