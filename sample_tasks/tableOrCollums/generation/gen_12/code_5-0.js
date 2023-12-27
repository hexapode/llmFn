
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = false;

  if (lines.length >= 4) {
    const firstRow = lines[0].split(/\s{2,}/);
    const secondRow = lines[1].split(/\s{2,}/);
    const thirdRow = lines[2].split(/\s{2,}/);
    const fourthRow = lines[3].split(/\s{2,}/);

    if (
      firstRow.length === secondRow.length &&
      secondRow.length === thirdRow.length &&
      thirdRow.length === fourthRow.length
    ) {
      isTable = true;
    }
  }

  // Check if the text represents columns
  let isColumns = false;

  if (lines.length >= 2) {
    const firstLine = lines[0].split(/\s{2,}/);
    const secondLine = lines[1].split(/\s{2,}/);

    if (firstLine.length > 1 && secondLine.length === firstLine.length) {
      isColumns = true;
    }
  }

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
