
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const firstLine = lines[0].trim();
  if (firstLine.includes("  ")) { // Assuming columns are separated by two spaces
    return "COLUMNS";
  }

  // Check if the text represents a table

  // Add your table detection logic here
  // Since the given text does not contain a clear table structure, we can skip this for now

  // If the text does not match the column or table structure, return "NORMAL"
  return "NORMAL";
}
