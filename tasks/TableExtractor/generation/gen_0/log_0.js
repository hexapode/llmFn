{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain tables if yes output them in Markdown forma, separated by \n\n between table. If no table are found, output NO_TABLE\nTo solve this task you need to create a javascript function that take into parameters Text to be transform and return a Markdown table.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named transformToMarkdownTable.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction transformToMarkdownTable(text) {\n  const tableRegex = /\\|(.+?)\\|(.+?)\\|/g;\n  let tables = text.match(tableRegex);\n  if (tables) {\n    return tables.join(\"  \\n\\n  \");\n  } else {\n    return \"NO_TABLE\";\n  }\n}\n```"
    }
  ],
  "perf": 1
}