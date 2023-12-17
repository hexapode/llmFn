
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.includes('  '));
  
  // Check if there are more than 3 consecutive lines with similar indentation
  let consecutiveIndentationCount = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    const currentIndentation = lines[i].match(/^\s*/)[0].length;
    const nextIndentation = lines[i + 1].match(/^\s*/)[0].length;
    if (Math.abs(currentIndentation - nextIndentation) < 4) {
      consecutiveIndentationCount++;
      if (consecutiveIndentationCount > 3) {
        return "TABLE";
      }
    } else {
      consecutiveIndentationCount = 0;
    }
  }

  // If no indication of a table is found, return "NORMAL"
  return "NONE";
}
