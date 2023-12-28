
    /* Try to improve the prediction accuracy, what could be a smart way?     */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.1;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.08;

    if (Bilirubin >= 2.5889 && Cholesterol <= 2000.89 && SGOT <= 999.89 && Albumin >= -2.49) {
        status_C_prob = 0.2;
        status_CL_prob = 0.08;
        status_D_prob = 0.7;
    } else if (Bilirubin < 1.9889000000000001 && Cholesterol <= 1504.95 && SGOT <= 1509.89 && Albumin >= 1.9889000000000001) {
        status_C_prob = 0.5;
        status_CL_prob = 0.02;
    }

    if (N_Days > 1499.9889 && Age > 39.9889 && Ascites === 0.9889 && Edema === 0.9889) {
        status_C_prob -= 0.0889;
        status_CL_prob += 0.0889;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
