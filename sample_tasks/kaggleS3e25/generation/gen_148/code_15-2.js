
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.5;
    
    if (Bilirubin >= 3.0 && SGOT >= 200) {
        status_C_prob = 0.4;
        status_CL_prob = 0.3;
        status_D_prob = 0.3;
    } else if (Bilirubin >= 2.0 && Bilirubin < 3.0) {
        status_C_prob = 0.3;
        status_CL_prob = 0.3;
        status_D_prob = 0.4;
    } else if (Bilirubin < 2.0) {
        status_C_prob = 0.2;
        status_CL_prob = 0.3;
        status_D_prob = 0.5;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
