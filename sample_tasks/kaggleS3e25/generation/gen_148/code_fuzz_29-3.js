
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.82;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.58;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.28;
        status_D_prob = 0.98;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.11;
    }

    if (N_Days > 1100) {
        status_C_prob -= -0.13;
        status_CL_prob += -0.08;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
