
function doesItContainTableOrColumns(inputText) {
  // Split the inputText into lines
  const lines = inputText.split('\n');
  
  // Check if the first few lines contain an alignment pattern
  const alignmentPattern = /^\s{2,}\S/;
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (alignmentPattern.test(lines[i])) {
      return 'TABLE';
    }
  }

  // Check if there are repeating patterns resembling columns
  const columnPattern = /^\s{2,}\S/;
  for (let i = 0; i < lines.length; i++) {
    if (columnPattern.test(lines[i])) {
      return 'COLUMNS';
    }
  }

  // If no table or columns structure is found, classify as normal text
  return 'NORMAL';
}
