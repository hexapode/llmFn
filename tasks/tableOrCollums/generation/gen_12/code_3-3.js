
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  let hasTable = false;
  let hasColumns = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.includes('|')) {
      if (hasTable) {
        return "TABLE_AND_COLUMNS";
      }
      hasColumns = true;
    } else if (line.split(/\s{2,}/).length > 1) {
      if (hasColumns) {
        return "TABLE_AND_COLUMNS";
      }
      hasTable = true;
    }
  }

  if (hasTable && hasColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (hasTable) {
    return "TABLE";
  } else if (hasColumns) {
    return "COLUMNS";
  }

  return "NORMAL";
}
