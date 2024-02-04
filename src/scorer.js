
function rescaleProbabilities(probabilities) {
    let sum = probabilities.reduce((a, b) => a + b, 0);
    return probabilities.map(p => {
        p = p / sum;
        return Math.max(Math.min(p, 1 - Math.pow(10, -15)), Math.pow(10, -15));
    });
}

// ROC area under curve score
function ROCAUCScore(y_true, y_pred) {
    let N = y_true.length;
    let n_pos = y_true.reduce((a, b) => a + b, 0);
    let n_neg = N - n_pos;
    let pairs = [];
    for (let i = 0; i < N; i++) {
        pairs.push([y_pred[i], y_true[i]]);
    }
    pairs.sort((a, b) => b[0] - a[0]);
    let auc = 0;
    let prev_x = 0;
    let prev_y = 0;
    let tp = 0;
    let fp = 0;
    for (let i = 0; i < N; i++) {
        let [p, y_val] = pairs[i];  // Renamed 'y' to 'y_val'
        if (y_val == 1) {  // Use 'y_val' instead of 'y'
            tp += 1;
        } else {
            fp += 1;
        }
        let x = fp / n_neg;
        let y = tp / n_pos;
        auc += (x - prev_x) * (y + prev_y) / 2;
        prev_x = x;
        prev_y = y;
    }
    return auc;
}


//default cross-entropy loss

function crossEntropyLoss(y_true, y_pred) {
    let N = y_true.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        let y_i = y_true[i];
        let p_i = y_pred[i];
        sum += y_i * Math.log(p_i) + (1 - y_i) * Math.log(1 - p_i);
    }
    return -sum / N;
}

// RSOC area under curve score
function SROCAUCScore(y_true, y_pred) {
    let p = 0;
    for (let i = 0; i < y_true.length; i++) { 
        if (y_pred[i] > 2) {
            p += (y_pred[i] - 1) * (y_pred[i] - 1);
        }
        if (y_pred[i] < -1) {
            p += (y_pred[i] + 1) * (y_pred[i] + 1);    
        }
    }
    let N = y_true.length;
    let n_pos = y_true.reduce((a, b) => a + b, 0);
    let n_neg = N - n_pos;
    let pairs = [];
    for (let i = 0; i < N; i++) {
        pairs.push([y_pred[i], y_true[i]]);
    }
    pairs.sort((a, b) => b[0] - a[0]);
    let auc = 0;
    let prev_x = 0;
    let prev_y = 0;
    let tp = 0;
    let fp = 0;
    for (let i = 0; i < N; i++) {
        let [p, y_val] = pairs[i];  // Renamed 'y' to 'y_val'
        if (y_val == 1) {  // Use 'y_val' instead of 'y'
            tp += 1;
        } else {
            fp += 1;
        }
        let x = fp / n_neg;
        let y = tp / n_pos;
        auc += (x - prev_x) * (y + prev_y) / 2;
        prev_x = x;
        prev_y = y;
    }
    return auc - p;
}

function multiClassLogloss(y_true, y_pred) {
    let logloss = 0;
    let penality = 0;

    y_pred = y_pred.map(row => {
        let probabilities = Object.values(row);
        let rescaledProbabilities = rescaleProbabilities(probabilities);
        let keys = Object.keys(row);
        let rescaledRow = {};
      
        for (let i = 0; i < keys.length; i++) {
            if (rescaledProbabilities[i] < 0) {
                return Infinity;
            }
            if (rescaleProbabilities[i] > 1) {
              return Infinity;
            }
        }
        for (let i = 0; i < keys.length; i++) {
            rescaledRow[keys[i]] = rescaledProbabilities[i];
        }
        
        return rescaledRow;
    });

    let N = y_true.length;
   
    for (let i = 0; i < N; i++) {
        let y_i = y_true[i];
        let p_i = y_pred[i][y_i];
        logloss += Math.log(p_i);
    }
    return -logloss / N + penality;
}

// Root-Mean-Squared-Error (RMSE)

function RMSE(y_true, y_pred) {
    let N = y_true.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        let y_i = y_true[i];
        let p_i = y_pred[i];
        sum += Math.pow(y_i - p_i, 2);
    }
    return Math.sqrt(sum / N);
}

// Squared Error
function AggErr(y_true, y_pred) {
    let N = y_true.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        let y_i = y_true[i];
        let p_i = y_pred[i];
        sum += Math.abs(y_i - p_i);
    }
    return sum;
}


// Log Root-Mean-Squared-Error (RMSE)
function LogRMSE(y_true, y_pred) {
    let N = y_true.length;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        let y_i = Math.log(y_true[i]);
        let p_i = Math.log(y_pred[i]);
        sum +=Math.pow(y_i - p_i, 2);
    }
    return Math.sqrt(sum / N);
}

module.exports = {
    multiClassLogloss,
    RMSE,
    LogRMSE,
    ROCAUCScore,
    SROCAUCScore,
    AggErr,
    crossEntropyLoss
}