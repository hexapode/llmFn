
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split("\n");

  // Get the length of the first line
  const firstLineLength = lines[0].trim().length;

  // A simple check to determine columns based on the consistent line length
  const containsColumns = lines.every((line) => line.trim().length === firstLineLength);

  if (containsColumns) {
    return "COLUMNS";
  } else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
