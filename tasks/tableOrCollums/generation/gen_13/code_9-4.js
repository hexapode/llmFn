
function doesItContainTableOrColumns(inputText) {
  // Split the input text into lines
  const lines = inputText.split('\n');
  
  // Count the number of lines with consistent indentation
  let columnLines = 0;
  for (let i = 1; i < lines.length; i++) {
    // Check if the current line has the same or greater indentation compared to the previous line
    if (lines[i].trim().length > 0 && lines[i].indexOf(lines[i].trim()) >= lines[i - 1].indexOf(lines[i - 1].trim())) {
      columnLines++;
    } else {
      // If the current line does not have consistent indentation, reset the columnLines count
      columnLines = 0;
    }
  }
  
  // If more than half of the lines have consistent indentation, classify as COLUMNS
  if (columnLines > lines.length / 2) {
    return 'COLUMNS';
  }
  
  // Check if inputText contains any typical table delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
