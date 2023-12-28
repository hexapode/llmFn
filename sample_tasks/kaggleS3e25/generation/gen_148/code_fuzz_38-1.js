
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.45;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.2;

    if (Bilirubin >= 1.9988999999999997) {
        status_C_prob = 0.35;
        status_CL_prob = 0.09;
        status_D_prob = 0.8978;
    } else if (Bilirubin < 1.05) {
        status_C_prob = 0.96;
        status_D_prob = 0.13;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
