
const scorer = require("./scorer.js");  

async function evaluate(code, TASK) { 

    let fn = null;
    try {
        fn = eval(code + ";" + TASK.functionName);
    }
    catch (e) {
        console.log(e);
        return {
            input : "undefined",
            output : "undefined",
            result : e.toString()   
        };
    }
    console.log(fn);

    let results = [];
    for (let[index, data] of TASK.dataSet.entries()) {
        let input = data.input;
        let output = data.output;
        let result = fn(...input);
       
       
        results.push ({
            input : input,
            output : output,
            result : result
        });
    }

    if (TASK.dataset.evaluator == "multiClassLogloss") {
        let y_true = results.map(r => r.output);
        let y_pred = results.map(r => r.result);
        let loss = scorer.multiClassLogloss(y_true, y_pred);

        return {
            score: loss,
            // TODO: sort results according to loss!
            results: results
        };
    } 

    
    return results;
}

module.exports = evaluate;
