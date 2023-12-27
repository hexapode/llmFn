{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only the functions.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Check if the text contains any typical table elements\n  if (text.includes('table') || text.includes('tb') || text.includes('tr') || text.includes('th') || text.includes('td')) {\n    // Check if the text also includes typical column elements\n    if (text.includes('column') || text.includes('col') || text.includes('column 1') || text.includes('col 1')) {\n      return 'TABLE_AND_COLUMNS';\n    } else {\n      return 'TABLE';\n    }\n  } else if (text.includes('column') || text.includes('col') || text.includes('column 1') || text.includes('col 1')) {\n    return 'COLUMNS';\n  } else {\n    return 'NORMAL';\n  }\n}\n```"
    }
  ],
  "perf": 6
}