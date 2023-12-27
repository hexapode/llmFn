
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const firstLineWordsCount = lines[0].split(/\s{2,}/).length; // Count the number of words in the first line
  const secondLineWordsCount = lines[1].split(/\s{2,}/).length; // Count the number of words in the second line
  if (firstLineWordsCount === secondLineWordsCount) {
    return "COLUMNS";
  }

  // Check if the text represents a table
  const headerRow = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  const dataRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
  if (headerRow.length === dataRow.length) {
    return "TABLE";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
