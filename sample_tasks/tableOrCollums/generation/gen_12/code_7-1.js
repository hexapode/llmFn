
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());
  
  const columnHeaders = lines[0].split(/\s{2,}/); // Get the headers from the first line
  
  // Check if the text represents a table
  let isTable = true;
  for (let i = 1; i < lines.length; i++) {
    const rowData = lines[i].split(/\s{2,}/); // Get the data from each line
    if (rowData.length !== columnHeaders.length) {
      isTable = false;
      break;
    }
  }
  
  if (isTable && columnHeaders.length > 1) {
    return "TABLE";
  }

  // Check if the text represents columns
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
