
function doesItContainTableOrColumns(inputText) {
  if (inputText.includes("Project Name") && inputText.includes("Country") && inputText.includes("Project Type") && inputText.includes("Project Benefits") && inputText.includes("Vendor") && inputText.includes("Tonnes")) {
    return "TABLE";
  } else if (inputText.includes("Project Name") && inputText.includes("Country") && inputText.includes("Project Type") && inputText.includes("Project Benefits") && inputText.includes("Vendor") && inputText.includes("Tonnes")) && (inputText.includes("Mycorrhizal Inoculation") || inputText.includes("Accelerated Reforestatio") || inputText.includes("Chyulu Hills") || inputText.includes("Salvador da Bahia") || inputText.includes("Bangladesh Gas") || inputText.includes("Scott River Improved")) {
    return "TABLE_AND_COLUMNS";
  } else if (inputText.includes("Mycorrhizal Inoculation") || inputText.includes("Accelerated Reforestatio") || inputText.includes("Chyulu Hills") || inputText.includes("Salvador da Bahia") || inputText.includes("Bangladesh Gas") || inputText.includes("Scott River Improved")) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
