
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.83;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.47;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.2;
        status_D_prob = 0.8889;
    } else if (Bilirubin < 11.1) {
        status_C_prob = 0.67;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.1889;
    }

    if (N_Days > 1100) {
        status_C_prob -= -0.11;
        status_CL_prob += -0.04;
    }

    if (Drug === 'D-penicillamine') {
        status_C_prob += 0.2111;
        status_D_prob -= -0.1;
    } else if (Drug === 'Placebo') {
        status_CL_prob += -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
