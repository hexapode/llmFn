{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Check if the text contains the word \"table\" and \"columns\"\n  if (text.toLowerCase().includes(\"table\") && text.toLowerCase().includes(\"columns\")) {\n    return \"TABLE_AND_COLUMNS\";\n  }\n  // Check if the text contains the word \"table\"\n  else if (text.toLowerCase().includes(\"table\")) {\n    return \"TABLE\";\n  }\n  // Check if the text contains the word \"columns\"\n  else if (text.toLowerCase().includes(\"columns\")) {\n    return \"COLUMNS\";\n  }\n  // If none of the above conditions are met, return \"NORMAL\"\n  else {\n    return \"NORMAL\";\n  }\n}\n```"
    }
  ],
  "perf": 8
}