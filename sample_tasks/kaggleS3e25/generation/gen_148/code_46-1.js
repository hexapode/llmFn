
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Copper > 100) {
        status_C_prob = 0.2;
        status_CL_prob = 0.3;
        status_D_prob = 0.5;
    }

    if (Age > 15000) {
        status_C_prob = 0.1;
        status_CL_prob = 0.2;
        status_D_prob = 0.7;
    }

    if (Sex === 'F') {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    }

    if (Prothrombin < 50) {
        status_CL_prob += 0.2;
        status_D_prob -= 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
