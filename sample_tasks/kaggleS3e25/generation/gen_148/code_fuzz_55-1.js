
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.84;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.4978;

    if (Bilirubin >= 2.9088999999999996) {
        status_C_prob = 0.19999999999999998;
        status_D_prob = 0.8200000000000001;
    } else if (Bilirubin < 1.0089000000000001) {
        status_C_prob = 0.62;
        status_CL_prob = 0.01;
        status_D_prob = 0.19780000000000003;
    }

    if (Hepatomegaly === 'Y' && Albumin > -2.61) {
        status_C_prob += -0.04;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.04;
        status_D_prob -= 0.08;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.08;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
