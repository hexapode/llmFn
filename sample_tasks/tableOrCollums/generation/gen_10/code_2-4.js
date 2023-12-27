
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  let lines = text.split("\n").map(line => line.trim());

  // Check for consistent column-like structure
  let firstLineLength = lines[0].length;
  let isColumnLike = lines.every(line => line.length === firstLineLength);

  // Check for repeated tabular structures
  let isTabular = lines.filter(line => line.includes("  ")).length > 2;

  // Determine the result based on the analysis
  if (isColumnLike && isTabular) {
    return "TABLE_AND_COLUMNS";
  } else if (isColumnLike) {
    return "COLUMNS";
  } else if (isTabular) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
