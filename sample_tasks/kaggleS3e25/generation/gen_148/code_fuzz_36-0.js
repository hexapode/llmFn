
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.51;
    var status_CL_prob = 0.01;
    var status_D_prob = 0.11;

    if (Bilirubin >= 1.9988999999999997) {
        status_C_prob = 0.35;
        status_CL_prob = 0.09;
        status_D_prob = 0.91;
    } else if (Bilirubin < -2.11) {
        status_C_prob = 0.72;
        status_CL_prob = 0.29780000000000006;
        status_D_prob = 0.20780000000000007;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
