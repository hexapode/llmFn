
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.24;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.09;

    if (Bilirubin >= 1.76) {
        status_C_prob = 0.29780000000000006;
        status_D_prob = 0.72;
    } else if (Bilirubin < 2.0089) {
        status_C_prob = 0.52;
        status_CL_prob = 0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
