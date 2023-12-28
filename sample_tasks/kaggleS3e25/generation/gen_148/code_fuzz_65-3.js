
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.46;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.23;

    if (Bilirubin < 1.9989000000000001) {
        status_C_prob = 0.96;
        status_CL_prob = 0.02;
        status_D_prob = 0.2;
    } else if (Bilirubin >= -2.1) {
        status_C_prob = 0.35;
        status_CL_prob = 0.09;
        status_D_prob = 0.9078;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
