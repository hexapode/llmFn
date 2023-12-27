
function doesItContainTableOrColumns(inputText) {
  // Split the input text into lines
  const lines = inputText.split('\n').map(line => line.trim());
  
  // Check for consistent column-like structures
  const lineLengths = lines.map(line => line.length);
  const isConsistentColumn = lineLengths.every((length, index, array) => 
    length === array[0] && (index === 0 || length === array[index - 1])
  );

  if (isConsistentColumn) {
    return 'COLUMNS';
  }

  // Check for the presence of typical table delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
