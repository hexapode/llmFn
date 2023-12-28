
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Assume the logistic regression model coefficients and intercept are already trained
    var coefficients = [1.2, -0.5, 0.8, -0.4, 0.6, -0.3, 0.7, -0.2, 0.3, -0.1, 0.4, -0.05, 0.2, -0.08, 0.1, -0.03, 0.15];
    var intercept = -1.5;

    var z = intercept;
    z += coefficients[0] * N_Days + coefficients[1] * Age + coefficients[2] * Bilirubin + /*...*/ + coefficients[15] * Prothrombin + coefficients[16] * Stage;
    
    var status_C_prob = sigmoid(z);
    var status_CL_prob = sigmoid(z + 0.3); // adding 0.3 to the z value for the next category
    var status_D_prob = sigmoid(z - 0.3); // subtracting 0.3 to the z value for the previous category

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
