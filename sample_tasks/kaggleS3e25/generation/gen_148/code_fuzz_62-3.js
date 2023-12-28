
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.5;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.2;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.8;
        status_CL_prob = 0.1;
        status_D_prob = 0.1;
    }

    if (N_Days > 1000) {
        status_C_prob -= 0.2;
        status_CL_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.2;
        status_D_prob -= 0.2;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
