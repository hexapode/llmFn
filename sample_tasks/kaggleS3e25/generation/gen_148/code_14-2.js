
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.5;

    // Using the "Stage" parameter in the computation
    var stageValue = parseFloat(Stage);
    if (stageValue >= 2) {
        status_C_prob = 0.1;
        status_CL_prob = 0.2;
        status_D_prob = 0.7;
    } else {
        status_C_prob = 0.3;
        status_CL_prob = 0.4;
        status_D_prob = 0.3;
    }

    // Adjust probabilities based on the level of Bilirubin
    if (Bilirubin >= 2.0) {
        status_C_prob *= 0.8;
        status_CL_prob *= 1.2;
        status_D_prob *= 1.5;
    } else if (Bilirubin >= 1.0) {
        status_C_prob *= 1.1;
        status_CL_prob *= 1.3;
        status_D_prob *= 0.9;
    } else {
        status_C_prob *= 1.2;
        status_CL_prob *= 0.8;
        status_D_prob *= 1.1;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
