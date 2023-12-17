
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const firstLine = lines[0].trim();
  const secondLine = lines[1] ? lines[1].trim() : ""; // Handle case where there is only 1 line
  const thirdLine = lines[2] ? lines[2].trim() : "";  // Handle case where there are only 1 or 2 lines

  if (firstLine.includes("  ") && secondLine.includes("  ") && !thirdLine.includes("  ")) {
    return "COLUMNS";
  }

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].replace(/\s{2,}/g, ' ').split(' ');
    const dataRow = lines[2].replace(/\s{2,}/g, ' ').split(' ');
    if (headerRow.length === dataRow.length && headerRow.every((item, index) => item.length === dataRow[index].length)) {
      return "TABLE";
    }
  }

  return "NORMAL";
}
