
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 1.5 && Cholesterol <= 200 && SGOT <= 100 && Albumin >= 3.5) {
        status_C_prob = 0.1;
        status_CL_prob = 0.3;
        status_D_prob = 0.6;
    } else if (Bilirubin < 1.0 && Cholesterol <= 300 && SGOT <= 150 && Albumin >= 3.0) {
        status_C_prob = 0.4;
        status_CL_prob = 0.2;
    }

    if (N_Days > 1500 && Age > 40 && Ascites === 1 && Edema === 1) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
