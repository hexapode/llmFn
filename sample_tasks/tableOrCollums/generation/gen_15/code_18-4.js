
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains consistent spacing and alignment
  const lines = inputText.split('\n');
  const firstLineLength = lines[0].trim().length;
  const isTableLike = lines.every(line => line.trim().length === firstLineLength);

  if (isTableLike) {
    return "TABLE";
  } else {
    // Check for consistent column-like structure
    const columnLike = lines.every(line => line.includes("  ") || line.includes("\t"));
    if (columnLike) {
      return "COLUMNS";
    }
  }

  return "NORMAL";
}
