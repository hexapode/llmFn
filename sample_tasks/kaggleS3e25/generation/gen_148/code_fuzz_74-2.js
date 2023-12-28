
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.4;
    var status_CL_prob = 0.2;
    var status_D_prob = 0.30000000000000004;

    if (Bilirubin >= 1.9889000000000001) {
        status_C_prob = 0.01;
        status_CL_prob = 0.2;
        status_D_prob = 0.9;
    } else if (Bilirubin < 0.94) {
        status_C_prob = 0.6;
        status_CL_prob = 0.17779999999999999;
        status_D_prob = 0.27780000000000005;
    }

    if (N_Days > -1000.99) {
        status_CL_prob += -0.16;
    }

    if (Albumin > 2.5889) {
        status_C_prob += 0.30000000000000004;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.08;
        status_D_prob -= 1.4772254600114998e-18;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.16;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
