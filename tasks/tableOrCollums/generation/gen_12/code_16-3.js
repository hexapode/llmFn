
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check for the presence of a table
  let isTable = false;
  for (let i = 0; i < lines.length; i++) {
    const columns = lines[i].split(/\s{2,}/);
    if (columns.length > 1) {
      const nextLineColumns = lines[i + 1]?.split(/\s{2,}/) || [];
      if (nextLineColumns.length > 1) {
        isTable = true;
        break;
      }
    }
  }

  // Check for the presence of columns
  let isColumns = false;
  for (let i = 0; i < lines.length; i++) {
    const columns = lines[i].split(/\s{2,}/);
    if (columns.length === 1 && lines[i + 1]?.split(/\s{2,}/).length === 1) {
      isColumns = true;
      break;
    }
  }

  // Determine the nature of the input text
  if (isTable && isColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (isTable) {
    return "TABLE";
  } else if (isColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
