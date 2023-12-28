
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Another way of predicting probabilities - using SGOT levels
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;
    
    // Adjust probabilities based on the level of SGOT
    if (SGOT >= 100) {
        status_C_prob = 0.25;
        status_CL_prob = 0.3;
        status_D_prob = 0.45;
    } else if (SGOT >= 80) {
        status_C_prob = 0.3;
        status_CL_prob = 0.25;
        status_D_prob = 0.45;
    }
    
    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
