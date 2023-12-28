
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Age > 15000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Cholesterol > 250) {
        status_C_prob += 0.1;
        status_CL_prob -= 0.1;
    }

    if (Prothrombin < 20) {
        status_D_prob += 0.2;
    }

    if (Ascites === 'Y' && Edema === 'Y') {
        status_C_prob -= 0.1;
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
