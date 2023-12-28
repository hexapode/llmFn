
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = Cholesterol / 300;
    var factor2 = Albumin / 4;
    var factor3 = SGOT / 100;
    var status_C_prob = 0.2 + factor1 - factor2 - factor3;
    var status_CL_prob = 0.2 - factor1 + factor2 - factor3;
    var status_D_prob = 0.6 - factor1 - factor2 + factor3;

    if (Age > 150) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Copper > 50) {
        status_C_prob += 0.1;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: Math.max(0, Math.min(1, status_C_prob)),
        Status_CL: Math.max(0, Math.min(1, status_CL_prob)),
        Status_D: Math.max(0, Math.min(1, status_D_prob))
    };
}
