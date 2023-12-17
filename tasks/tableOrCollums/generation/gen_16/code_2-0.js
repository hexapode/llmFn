
function doesItContainTableOrColumns(inputText) {
  if (inputText.includes('Project Name') && inputText.includes('Country') && inputText.includes('Project Type') && inputText.includes('Project Benefits') && inputText.includes('Vendor') && inputText.includes('Tonnes')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
