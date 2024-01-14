const evaluate = require('./evaluate.js');
const fs = require('fs/promises');

function replaceNumbersPreservingComments(jsCode, ROUND_FACTOR) {
  // Regex to match numbers in various formats, single-line, and multi-line comments
  const regex = /\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|[-+]?\b\d+(\.\d+)?([eE][-+]?\d+)?\b/g;

  const numbers = [];
  let match;
  let lastIndex = 0;
  let modifiedCode = '';

  while ((match = regex.exec(jsCode)) !== null) {
    if (match[0].startsWith('//') || match[0].startsWith('/*')) {
      // Append comments directly to the result
      modifiedCode += jsCode.substring(lastIndex, regex.lastIndex);
    } else {
      // Replace numbers
      modifiedCode += jsCode.substring(lastIndex, match.index) + `VARIABLE_${numbers.length}`;
      numbers.push(parseFloat(match[0]));
    }
    lastIndex = regex.lastIndex;
  }

  modifiedCode += jsCode.substring(lastIndex);

  return {
    code: modifiedCode,
    numbers: numbers
  };
}

async function fuzz(result, TASK, depth=20, roundTo=2, datasetpc=1, 
    mutationsFactors=[-1, .1, 10, 2, .5, 1.10, .90, 1.05, 0.95, 1.01, .99, 1.005, .995, 1.001, .999, 1.0005, .9995, 1.0001, .9999],
    mutationsAdd=[1, -1, 0.1, -0.1, 0.01, -0.01, 0.001, -0.001, 0.0001, -0.0001],
    outDir=undefined,
    onlyLast=0
    ) {
    console.log("fuzz outDir", outDir);
    console.log("fuzz",depth, roundTo, datasetpc);
    console.log(result.code);
    ROUND_FACTOR = Math.pow(10, roundTo);
    let newCode = replaceNumbersPreservingComments(result.code, ROUND_FACTOR);
    let numbers = newCode.numbers;
    let code = newCode.code;
    let originalScore = result.score;
    console.log('fuzzin from', originalScore);
    let mm = 0;
    let start = [ ];
    for (let r = roundTo - 1; r > 0; r--) {
        start.push(1/ Math.pow(10, r));
        start.push(-1/ Math.pow(10, r));
    }

    start.push( -2);
    let hasChange = false;
     for (let k = 0; k < start.length; k++) {
        let end = 0;
        if (onlyLast > 0) { 
            end = numbers.length - onlyLast;
        }
        for (let i = numbers.length - 1; i >= end; i--) {
            console.log('fuzzing', i, '/', numbers.length, 'v:', numbers[i]);
            let factor = 1 + start[k];
            let lump = start[k];
            let oFactor = factor;
            while ((start[k] > 0 && factor >= oFactor) || (start[k] < 0 && factor <= oFactor)) {
                let newNumber = [...numbers];
                newNumber[i] = newNumber[i] * factor;
                if (newNumber[i] == 0){ 
                    newNumber[i] = factor - 1;
                }
                let testcode = code;

                // init test code
                for (let j = 0; j < numbers.length; j++) {
                 //   newNumber[i] = Math.round(newNumber[i] * ROUND_FACTOR) / ROUND_FACTOR;
                    testcode = testcode.replace(`VARIABLE_${j}`, newNumber[j]);
                }

                let res=  await evaluate(testcode, TASK, datasetpc);
                let mutate = false;
                if (
                (TASK.dataset.evaluatorOrder == "lowerIsBetter" && res.score < result.score)
                    ||
                    (TASK.dataset.evaluatorOrder == "higherIsBetter" && res.score > result.score)
                ) {
                    result.result = res.result;
                    result.score = res.score;
                    console.log('#' + mm + " -> " ,res.score, 'from', originalScore)
                    if (outDir) {
                        await fs.writeFile(outDir + '/best.js', `/* ${result.score} */\n`+ testcode);
                    }
                    result.code = testcode;
                    numbers= newNumber;
                    mm++;
                    hasChange = true;
                    if (mm > depth) {
                        console.log('fuzzout E', originalScore, '->', result.score)
                        
                        return result;
                    }
                    mutate = true;
                }
                else {
                    console.log('#FAIL', res.score, 'with factor', factor, 'val', newNumber[i]);
                }
                if (start[k] == -2) {
                    break;
                }
         
                if (mutate) {   
                   
                    lump *= 1.10;
                }
                else {
                    if (lump == start[k]) {
                        lump *= 0.1;
                    } else {
                        lump = start[k];
                    }
                }
                factor = 1 + lump;
            }
        }
        if (k == start.length -1 && hasChange) {
            console.log("RERUN")
            hasChange = false;
            k = -1;
        }
    }
       




    console.log('fuzzout', originalScore, '->', result.score)

    return result;

}

module.exports = fuzz;