
function doesItContainTableOrColumns(inputText) {
  // Split the input into lines and check if each line has consistent column alignments
  const lines = inputText.split('\n');

  // Check if the lines have consistent column widths to identify table or column-like structure
  const columnWidths = lines.map((line) => line.split(/\s{2,}/).map((col) => col.trim().length));
  const consistentWidths = columnWidths.every((widths) => widths.every((width) => width > 0));

  if (consistentWidths) {
    // Check if there are multiple rows with consistent column alignments to determine table or columns
    if (columnWidths.length > 1) {
      return "TABLE";
    } else {
      return "COLUMNS";
    }
  } else {
    return "NORMAL";
  }
}
