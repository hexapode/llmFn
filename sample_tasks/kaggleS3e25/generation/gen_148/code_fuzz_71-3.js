
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.28890000000000005;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.11;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.67;
        status_D_prob = 0.1889;
    }

    if (N_Days > 1000) {
        status_C_prob -= -0.22;
        status_CL_prob += 0.01;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0;
        status_D_prob -= 0;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
