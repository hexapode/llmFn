
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Assuming we have trained coefficients and intercept for the logistic regression model
    var coefficients = [0.1, 0.3, -0.2, 0.5, -0.4, 0.2, 0.1, -0.3, 0.6, -0.5, 0.4, 0.2, -0.2, 0.3, -0.1, 0.4, -0.3];
    var intercept = -1.5;

    // Feature scaling and transformation
    var features = [parseInt(N_Days), (Drug === "D-penicillamine" ? 1 : 0), parseInt(Age), (Sex === "M" ? 1 : 0), (Ascites === "Y" ? 1 : 0), (Hepatomegaly === "Y" ? 1 : 0), (Spiders === "Y" ? 1 : 0), (Edema === "Y" ? 1 : 0), parseFloat(Bilirubin), parseFloat(Cholesterol), parseFloat(Albumin), parseFloat(Copper), parseFloat(Alk_Phos), parseFloat(SGOT), parseFloat(Tryglicerides), parseFloat(Platelets), parseFloat(Prothrombin), parseFloat(Stage)];

    // Predict using logistic regression model
    var z = intercept;
    for (var i = 0; i < features.length; i++) {
        z += features[i] * coefficients[i];
    }
    var prediction = sigmoid(z);

    // Transform prediction to probabilities for each outcome
    var status_C_prob = 1 - prediction;
    var status_CL_prob = (1 - status_C_prob) * 0.8; // Adjusting based on the problem domain to make sure the probabilities sum up to 1
    var status_D_prob = 1 - status_C_prob - status_CL_prob;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
