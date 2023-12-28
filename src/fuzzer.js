const evaluate = require('./evaluate.js');

function replaceNumbersPreservingComments(jsCode) {
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
      numbers.push(match[0]);
    }
    lastIndex = regex.lastIndex;
  }

  modifiedCode += jsCode.substring(lastIndex);

  return {
    code: modifiedCode,
    numbers: numbers
  };
}

async function fuzz(result, TASK) {

    let newCode = replaceNumbersPreservingComments(result.code);
    let numbers = newCode.numbers;
    let code = newCode.code;
    let originalScore = result.score;
    console.log('fuzzin');
    let mm = 0;


    let mutationAdd = [1, -1, 0.1, -0.1, 0.01, -0.01, 0.001, -0.001, 0.0001, -0.0001];
    
// offset
    for (let add of mutationAdd) {
        let newNumber = [...numbers];
    

        let testcode = code;
        for (let j = 0; j < numbers.length; j++) {
            newNumber[j] = parseFloat(newNumber[j]) + add;
            testcode = testcode.replace(`VARIABLE_${j}`, newNumber[j]);
        }

        let res=  await evaluate(testcode, TASK);
        if (res.score < result.score) {
            result.result = res.result;
            result.score = res.score;
            result.code = testcode;
            numbers= newNumber;
        }

    }

    for (let add of mutationAdd) {
        for (let i = 0; i < numbers.length; i++) {
            let newNumber = [...numbers];
            newNumber[i] = parseFloat(newNumber[i]) + add;

            let testcode = code;
            for (let j = 0; j < numbers.length; j++) {
                testcode = testcode.replace(`VARIABLE_${j}`, newNumber[j]);
            }

            let res=  await evaluate(testcode, TASK);
            if (res.score < result.score) {
                result.result = res.result;
                result.score = res.score;
                result.code = testcode;
                numbers= newNumber;
            }
        }
    }


    let mutationsFactors = [-1, .1, 10, 2, .5, 1.10, .90, 1.05, 0.95, 1.01, .99, 1.005, .995, 1.001, .999, 1.0005, .9995, 1.0001, .9999];
     for (let k = 0; k < mutationsFactors.length; k++) {
        let factor = mutationsFactors[k];
        for (let i = 0; i < numbers.length; i++) {
            let newNumber = [...numbers];
            newNumber[i] = parseFloat(newNumber[i]) * factor;
            // round all new numbers to 4 decimal places
            let testcode = code;
            for (let j = 0; j < numbers.length; j++) {
                 newNumber[i] = Math.round(newNumber[i] * 100) / 100;
                testcode = testcode.replace(`VARIABLE_${j}`, newNumber[j]);
            }

            let res=  await evaluate(testcode, TASK);
            if (res.score < result.score) {
                result.result = res.result;
                result.score = res.score;
                console.log(res.score)
                result.code = testcode;
                numbers= newNumber;
                i = -1;
                mm++;
                if (mm > 20) {
                    console.log('fuzzout E', originalScore, '->', result.score)

                    return result;
                }
                if (k > 0) {
                    k = 0;;
                    factor = mutationsFactors[k];
                }
            }
        }
    }


        console.log('fuzzout', originalScore, '->', result.score)

    return result;

}

module.exports = fuzz;