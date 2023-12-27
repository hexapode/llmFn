
function doesItContainTableOrColumns(inputText) {
  const isTable = inputText.includes("Program And Creator Spotlights");
  const isColumns = inputText.includes("Paula Garcas") && inputText.includes("Korede Azeez");

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
