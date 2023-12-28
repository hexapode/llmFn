
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.02;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.19780000000000006;

    if (Bilirubin >= 14.08) {
        status_C_prob = 0.02;
        status_D_prob = 0.75;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.84;
        status_CL_prob = 0.02;
    }

    if (N_Days > 1099.95) {
        status_C_prob -= -0.1022;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
