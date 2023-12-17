{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nYou will be provided with raw text comming from an OCR. Determine if the input text contain tables if yes output them in Markdown format, separated by \n\n between table. If no table are found, output NO_TABLE\nTo solve this task you need to create a javascript function that take into parameters Text to be transform and return a Markdown table.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named transformToMarkdownTable.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction transformToMarkdownTable(text) {\n  // Split the text by new line characters\n  let lines = text.split('\\n');\n  let tables = [];\n  let inTable = false;\n  let table = [];\n\n  // Iterate through each line of text\n  for (let line of lines) {\n    // Check if the line starts and ends with '|'\n    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {\n      if (!inTable) {\n        inTable = true;\n      }\n      table.push(line.trim());\n    } else {\n      if (inTable) {\n        tables.push(table.join('\\n'));\n        table = [];\n        inTable = false;\n      }\n    }\n  }\n\n  if (tables.length > 0) {\n    return tables.join('\\n\\n');\n  } else {\n    return 'NO_TABLE';\n  }\n}\n```"
    }
  ],
  "perf": 1
}