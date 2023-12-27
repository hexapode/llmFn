
function doesItContainTableOrColumns(text) {
  const rows = text.split('\n');
  const rowDistances = [];
  let prevX = 0;

  // Calculate the average horizontal distance for each row
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const content = row.trim();
    if (content) {
      const match = content.match(/\S/);
      if (match) {
        const x = match.index;
        if (i > 0) {
          rowDistances.push(x - prevX);
        }
        prevX = x;
      }
    }
  }

  // Calculate the standard deviation of row distances
  const averageDistance = rowDistances.reduce((acc, val) => acc + val, 0) / rowDistances.length;
  const standardDeviation = Math.sqrt(rowDistances.map(x => Math.pow(x - averageDistance, 2)).reduce((acc, val) => acc + val, 0) / rowDistances.length);

  // If the standard deviation is low, it may indicate a columnar structure
  if (standardDeviation < 10) {
    return "COLUMNS";
  }

  // Check if the text contains '|' to determine the presence of a table
  if (text.includes('|')) {
    return "TABLE";
  }

  // If none of the above conditions are met, classify as normal text
  return "NORMAL";
}
