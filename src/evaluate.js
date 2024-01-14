
const scorer = require("./scorer.js");  


// a function that take a variable and a schema and return true if the variable is of the type of the schema
/* Sample schema
 {
    "type" : "hashmap",
    "properties" : {
        "Status_C" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1
        },
        "Status_CL" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1
        },
        "Status_D" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1
        }
    }
}

*/
function validateSchema(variable, schema) {
    if (variable === undefined) { 
        return false;
    }
    if (schema.type === 'number') {
        if (typeof variable !== 'number') {
            return false;
        } 
        if (schema.minimum !== undefined && variable < schema.minimum) {
            return false;
        }
        if (schema.maximum !== undefined && variable > schema.maximum) {
            return false;
        }
        return true;
    }
    for (let key in schema.properties) {
        if (!(key in variable)) {
            return false;
        }
        if (typeof variable[key] !== schema.properties[key].type) {
            return false;
        }
        if (schema.properties[key].type === 'number') {

            if (variable[key] <= schema.properties[key].minimum || variable[key] >= schema.properties[key].maximum) {
                return false;
            }
        }
    }

    // check if there is no extra key
    for (let key in variable) {
        if (!(key in schema.properties)) {
            return false;
        }
    }
    return true;
}

async function evaluate(code, TASK, datasetPass=1) { 
    let errorResult = Infinity;
    if (TASK.dataset.evaluatorOrder == "higherIsBetter") { 
        errorResult= -Infinity;
    }

    let fn = null;
    if (typeof code == "function") {
        fn = code;
    } else {

        try {
            
            fn = eval(code + ";" + TASK.functionName);

         }
        catch (e) {

            return {
                input : "undefined",
                output : "undefined",
                result :undefined,
                score: errorResult
            };
        }
    }
  

    let results = [];
    let count = 0;
    for (let data of TASK.dataSet) {
        try {
            count++;
            let input = data.input;
            let output = data.output;
            let result = fn(...input);


            results.push ({
                input : input,
                output : output,
                result : result
            });

            if (count > TASK.dataset.length * datasetPass) {
                break;
            }
        }
        catch (e) {
            console.log(e);
            return {
                input : "undefined",
                output : "undefined",
                result :undefined,
                score: errorResult
            };
        }
    
    }
    let y_true = results.map(r => parseFloat(r.output));
    let y_pred = results.map(r => r.result);

    if (y_pred.length != y_true.length) {
        return {
            score: errorResult,
            results: results
        };
    }

    for (let i = 0; i < y_pred.length; i++) {
        if (!validateSchema(y_pred[i], TASK.dataset.outputSchema)) {
            return {
                score: errorResult,
                results: results
            };
        }
    }

    if (TASK.dataset.evaluator == "RMSE") {
        let loss = scorer.RMSE(y_true, y_pred);
        if (isNaN(loss)) { 
            loss = errorResult;
        }
        for (let res of results) {
            res.loss = scorer.RMSE([parseFloat(res.output)], [res.result]);        
        }
        // sort big to small loss
        results.sort((a, b) => b.loss - a.loss);
        return {
            score: loss,
            // TODO: sort results according to loss!
            results: results
        };

    }

    if (TASK.dataset.evaluator == "LogRMSE") {
        let loss = scorer.LogRMSE(y_true, y_pred);
        if (isNaN(loss)) { 
            loss = errorResult;
        }
        for (let res of results) {
            res.loss = scorer.RMSE([parseFloat(res.output)], [res.result]);        
        }
        // sort big to small loss
        results.sort((a, b) => b.loss - a.loss);
        return {
            score: loss,
            // TODO: sort results according to loss!
            results: results
        };

    }

    if (TASK.dataset.evaluator == "ROCCurve") {
         let loss = scorer.SROCAUCScore(y_true, y_pred);
        if (isNaN(loss)) { 
            loss = errorResult;
        }
        // debugger;
        return {
            score: loss
        }
        for (let res of results) {
            res.loss = scorer.ROCAUCScore([parseFloat(res.output)], [res.result]);        
        }
        // sort big to small loss
        results.sort((a, b) => a.loss - b.loss);
        return {
            score: loss,
            // TODO: sort results according to loss!
            results: results
        };
    }

    if (TASK.dataset.evaluator == "multiClassLogloss") {
        y_true = results.map(r => TASK.dataset.output + '_' + r.output);
        
        let loss = scorer.multiClassLogloss(y_true, y_pred);
        if (isNaN(loss)) { 
            loss = errorResult;
        }
        for (let res of results) {
            res.loss = scorer.multiClassLogloss([TASK.dataset.output + '_' + res.output], [res.result]);        
        }
        // sort big to small loss
        results.sort((a, b) => b.loss - a.loss);
        return {
            score: loss,
            // TODO: sort results according to loss!
            results: results
        };
    } 

    
    return results;
}

module.exports = evaluate;
