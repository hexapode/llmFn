
function doesItContainTableOrColumns(inputText) {
  // Remove unwanted characters and split the text into lines
  const lines = inputText.replace(/[-*]/g, '').split('\n');
  
  // Check if any of the lines contains characters typically found in tables or columns
  for (let line of lines) {
    if (line.includes('|')) {
      return 'COLUMNS';
    } else if (line.trim().split(/\s{2,}/).length > 1) {
      return 'TABLE';
    }
  }
  
  // If none of the lines contain table or columns delimiters, return 'NORMAL'
  return 'NORMAL';
}
