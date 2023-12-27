
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  
  const lines = inputText.split('\n');
  let containsTable = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // If the line contains a lot of | and - characters, it's probably a table
    if ((line.split('|').length > 3 && line.split('-').length > 3) || line.includes('Release Details')) {
      containsTable = true;
      break;
    }
  }
  
  if (containsTable) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
