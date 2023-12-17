
function doesItContainTableOrColumns(inputText) {
  // We can refine the function to specifically look for column-like structures
  // Checking for presence of multiple lines with similar spacing or delimiter
  const lines = inputText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== ''); // Remove empty lines

  if (lines.length < 3) {
    return 'NORMAL';
  }

  const firstLineLength = lines[0].length;
  const secondLineLength = lines[1].length;
  let isColumns = true;

  for (let i = 2; i < lines.length; i++) {
    if (lines[i].length !== firstLineLength && lines[i].length !== secondLineLength) {
      isColumns = false;
      break;
    }
  }

  return isColumns ? 'COLUMNS' : 'NORMAL';
}
