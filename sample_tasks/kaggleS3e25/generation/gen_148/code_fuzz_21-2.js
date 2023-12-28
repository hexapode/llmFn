
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.63;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.75;

    if (Bilirubin >= 2.9989) {
        status_C_prob = 0.29;
        status_D_prob = 0.9;
    } else if (Bilirubin < 1.8) {
        status_C_prob = 0.96;
        status_CL_prob = 0.02;
        status_D_prob = 0.19;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
