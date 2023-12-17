
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if there are multiple lines with consistent column alignment
  const consistentColumnAlignment = lines.filter(line => line.trim().split(/\s{2,}/).length > 1).length > 1;
  // If there are consistent column alignments, it's likely to be columns
  if(consistentColumnAlignment) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
