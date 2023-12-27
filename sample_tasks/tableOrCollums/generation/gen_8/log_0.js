{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(inputText) {\n  // Check for the presence of table-like structure\n  if (inputText.includes('|') || inputText.includes('+') || inputText.includes('-')) {\n    // Check for the presence of column-like structure\n    if (inputText.includes('\\t')) {\n      return 'TABLE_AND_COLUMNS';\n    } else {\n      return 'TABLE';\n    }\n  } else if (inputText.includes('\\t')) {\n    return 'COLUMNS';\n  } else {\n    return 'NORMAL';\n  }\n}\n```"
    }
  ],
  "perf": 5
}