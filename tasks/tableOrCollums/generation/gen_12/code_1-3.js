
function doesItContainTableOrColumns(text) {
  // Split the input text by newline characters
  const lines = text.split('\n');

  // Check if the text represents a table
  let isTable = true;
  for (let i = 0; i < lines.length; i++) {
    const cells = lines[i].split(/\s{2,}/); // Split each line into cells using multiple spaces as delimiter
    if (cells.length < 2) {
      isTable = false;
      break;
    }
  }

  // Check if the text represents columns
  let isColumns = true;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '') { // Skip empty lines
      continue;
    }
    if (lines[i].charAt(0) !== ' ' && lines[i].charAt(1) !== ' ') {
      isColumns = false;
      break;
    }
  }

  // Determine the result based on the analysis
  if (isTable && isColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (isTable) {
    return "TABLE";
  } else if (isColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
