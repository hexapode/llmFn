
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.84;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.41780000000000006;

    if (Bilirubin >= 1.9988999999999997) {
        status_C_prob = 0.22;
        status_CL_prob = 0.05;
        status_D_prob = 0.8200000000000001;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.62;
        status_CL_prob = 0.02;
        status_D_prob = 0.29780000000000006;
    }

    if (N_Days > 2000.02) {
        status_CL_prob += -0.002200000000000009;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.08;
        status_D_prob -= 0.16;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
