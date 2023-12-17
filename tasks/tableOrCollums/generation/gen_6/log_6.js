{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Check if the text contains typical table features such as rows and columns\n  if (text.includes('|') || text.includes('+') || text.includes('-')) {\n    return \"TABLE\";\n  }\n\n  // Check if the text contains typical columnar structure\n  if (text.split('\\n').every(row => row.trim().split(/\\s{2,}/).length > 1)) {\n    return \"COLUMNS\";\n  }\n\n  // Check if the text contains both table and columnar structure\n  if (text.includes('|') && text.split('\\n').every(row => row.trim().split(/\\s{2,}/).length > 1)) {\n    return \"TABLE_AND_COLUMNS\";\n  }\n\n  // If none of the above conditions is met, classify as normal text\n  return \"NORMAL\";\n}\n```\n"
    },
    {
      "role": "user",
      "content": "Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function."
    },
    {
      "role": "assistant",
      "content": "One creative way to determine if the input text contains a table or columns is by examining the spatial layout of the text. We can analyze the position of the text and determine if it resembles a table or columnar structure based on the alignment and spacing of the content.\n\nTo implement this approach, we can calculate the average horizontal distance between the content in each row. If the average distance is consistent across multiple rows, it may indicate a columnar structure. Similarly, if the content in each row aligns vertically with the content in adjacent rows, it may indicate a table structure.\n\nLet's implement this approach in the function:\n\n```javascript\nfunction doesItContainTableOrColumns(text) {\n  const rows = text.split('\\n');\n  const rowDistances = [];\n  let prevX = 0;\n\n  // Calculate the average horizontal distance for each row\n  for (let i = 0; i < rows.length; i++) {\n    const row = rows[i];\n    const content = row.trim();\n    if (content) {\n      const match = content.match(/\\S/);\n      if (match) {\n        const x = match.index;\n        if (i > 0) {\n          rowDistances.push(x - prevX);\n        }\n        prevX = x;\n      }\n    }\n  }\n\n  // Calculate the standard deviation of row distances\n  const averageDistance = rowDistances.reduce((acc, val) => acc + val, 0) / rowDistances.length;\n  const standardDeviation = Math.sqrt(rowDistances.map(x => Math.pow(x - averageDistance, 2)).reduce((acc, val) => acc + val, 0) / rowDistances.length);\n\n  // If the standard deviation is low, it may indicate a columnar structure\n  if (standardDeviation < 10) {\n    return \"COLUMNS\";\n  }\n\n  // Check if the text contains '|' to determine the presence of a table\n  if (text.includes('|')) {\n    return \"TABLE\";\n  }\n\n  // If none of the above conditions are met, classify as normal text\n  return \"NORMAL\";\n}\n```"
    }
  ],
  "perf": 8
}