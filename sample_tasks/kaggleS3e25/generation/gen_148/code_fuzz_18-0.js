
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6;
    var status_CL_prob = 0.11;
    var status_D_prob = 0.19780000000000006;

    if (Bilirubin >= 1.76) {
        status_C_prob = -0.08;
        status_D_prob = 0.62;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.42000000000000004;
        status_CL_prob = 0.0978;
    }

    if (N_Days > 799.96) {
        status_C_prob -= -0.4;
        status_CL_prob += -0.02;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob -= -0.1022;
        status_D_prob += 0;
    } else if (Drug === "Placebo") {
        status_C_prob += 0.14;
        status_CL_prob += -0.05220000000000001;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
