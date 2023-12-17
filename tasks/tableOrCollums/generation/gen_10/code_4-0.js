
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if there are at least 3 lines
  if (lines.length < 3) {
    return "NORMAL";
  }

  // Check if there are consistent number of words in each line
  const numWordsInLines = lines.map(line => line.split(/\s+/).length);
  const isConsistentNumWords = numWordsInLines.every((val, i, arr) => val === arr[0]);

  if (isConsistentNumWords) {
    // Check if there are consistent spacing and alignment, indicative of columns
    const firstLineLength = lines[0].length;
    const isConsistentSpacing = lines.every(line => line.length === firstLineLength);
    if (isConsistentSpacing) {
      return "COLUMNS";
    }
  }
  
  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
