
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());
  
  // Identify if the text represents a table
  let isTable = true;
  let foundSeparator = false;
  let separatorIndex;
  
  // Check if the first few lines contain consistent column separators
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (lines[i].match(/^\s*\S+(\s+\S+)*\s*$/)) {
      // If the line contains at least one word and is properly formatted
      if (foundSeparator) {
        if (lines[i].includes("----")) {
          separatorIndex = i;
          break;
        } else {
          isTable = false;
          break;
        }
      }
    } else {
      // If the line does not match the expected format
      isTable = false;
      break;
    }
  }

  if (isTable) {
    // If consistent column separators are found, it's a table
    return "TABLE";
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
