
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.68;

    if (Bilirubin >= 2.32) {
        status_C_prob = 0.22;
        status_CL_prob = 0.1;
        status_D_prob = 0.8200000000000001;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.62;
        status_CL_prob = 0.02;
        status_D_prob = 0.19780000000000006;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.06;
        status_D_prob -= 0;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.08;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
