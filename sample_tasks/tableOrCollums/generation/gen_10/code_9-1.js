
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Check if any line contains separators such as tabs or multiple spaces
  const separatorsRegex = /[\t\s]{2,}/; // Regex to match tab or multiple spaces
  const hasSeparators = lines.some(line => separatorsRegex.test(line));
  
  // Check if there are multiple lines with separators
  const hasMultipleLinesWithSeparators = lines.filter(line => separatorsRegex.test(line)).length > 1;
  
  // If there are both separators and multiple lines with separators, it's likely to be both table and columns
  if (hasSeparators && hasMultipleLinesWithSeparators) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only separators without multiple lines, it's columns
  else if (hasSeparators) {
    return "COLUMNS";
  }
  // If there are multiple lines without separators, it's a table
  else if (hasMultipleLinesWithSeparators) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
