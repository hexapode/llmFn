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
      "content": "One novel way to solve this problem is by analyzing the spacing patterns in the input text. A typical table might have consistent spacing between columns, while a columnar structure might have irregular spacing. By analyzing the spacing patterns, we can differentiate between the two structures.\n\nTo implement this, we can examine the average distance between words in each line and compare it to the average distance between words in adjacent lines. If the distances are fairly consistent within a line, but vary significantly between lines, it might suggest a table structure. However, if the distances vary significantly within a line, it could indicate a columnar structure.\n\nLet's implement this approach in the function:\n\n```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Function to calculate the average distance between words in a string\n  function calculateAverageDistance(str) {\n    const words = str.trim().split(/\\s+/);\n    let totalDistance = 0;\n    for (let i = 1; i < words.length; i++) {\n      totalDistance += words[i].length + 1; // Adding 1 for the space\n    }\n    return totalDistance / (words.length - 1);\n  }\n\n  const lines = text.split(\"\\n\");\n\n  // Calculate the average distance between words in the first line\n  const firstLineAvgDistance = calculateAverageDistance(lines[0]);\n\n  // Calculate the average distance between words in the second line\n  const secondLineAvgDistance = calculateAverageDistance(lines[1]);\n\n  // Calculate the difference between the average distances\n  const distanceDifference = Math.abs(firstLineAvgDistance - secondLineAvgDistance);\n\n  // If the difference is above a certain threshold, it suggests a table structure\n  if (distanceDifference < 1) {\n    return \"TABLE\";\n  }\n\n  // If the difference is below a certain threshold, it suggests a columnar structure\n  if (distanceDifference > 4) {\n    return \"COLUMNS\";\n  }\n\n  // If none of the above conditions is met, classify as normal text\n  return \"NORMAL\";\n}\n```"
    }
  ],
  "perf": 8
}