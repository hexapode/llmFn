
function doesItContainTableOrColumns(inputText) {
  // Split the input text into lines and remove empty lines
  const lines = inputText.split('\n').filter(line => line.trim() !== '');
  
  // Check if the input text contains tabular structure based on the alignment of columns
  const isTabular = lines.every(line => line.includes('\t') || line.includes('|') || line.includes(','));

  if (isTabular) {
    return "COLUMNS";
  } else {
    // Check for common table related keywords
    const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
    // If common keywords are found, then it's likely a table
    if (containsTable) {
      return "TABLE";
    } else {
      return "NORMAL";
    }
  }
}
