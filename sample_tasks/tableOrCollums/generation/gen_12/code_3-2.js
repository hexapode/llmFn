
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  if (lines.length >= 3) {
    // Check if the second and third lines represent a table header and data
    const headerRow = lines[1].split(/\s{2,}/);
    const dataRow = lines[2].split(/\s{2,}/);
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  if (lines[0].includes("   ") && lines[1].includes("   ")) {
    return "COLUMNS";
  }

  return "NORMAL";
}
