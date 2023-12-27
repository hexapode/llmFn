
function rescaleProbabilities(probabilities) {
    let sum = probabilities.reduce((a, b) => a + b, 0);
    return probabilities.map(p => {
        p = p / sum;
        return Math.max(Math.min(p, 1 - Math.pow(10, -15)), Math.pow(10, -15));
    });
}

function multiClassLogloss(y_true, y_pred) {
    
    y_pred = y_pred.map(row => {
        let probabilities = Object.values(row);
        let rescaledProbabilities = rescaleProbabilities(probabilities);
        let keys = Object.keys(row);
        let rescaledRow = {};
        for (let i = 0; i < keys.length; i++) {
            rescaledRow[keys[i]] = rescaledProbabilities[i];
        }
        return rescaledRow;
    });

    let N = y_true.length;
    let logloss = 0;
    for (let i = 0; i < N; i++) {
        let y_i = y_true[i];
        let p_i = y_pred[i][y_i];
        logloss += Math.log(p_i);
    }
    return -logloss / N;
}


module.exports = {
    multiClassLogloss
}