
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains two columns separated by multiple spaces
  const hasTwoColumns = lines.some(line => {
    const words = line.trim().split(/\s{2,}/); // Split by 2 or more spaces
    return words.length === 2 && words.every(word => word.trim() !== '');
  });
  // If there are two columns, it's likely to be a list of columns
  if (hasTwoColumns) {
    return "COLUMNS";
  }
  // Otherwise, check for the presence of rows and multiple columns
  const hasRows = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  // If there are both rows and columns, it's a traditional table
  if (hasRows && hasColumns) {
    return "TABLE";
  }
  // If there are only columns without multiple rows, it's also a list of columns
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
