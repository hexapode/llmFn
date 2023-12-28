
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var additionalFactor = (parseInt(Age) > 20000) ? 0.2 : 0.1; // Adding a step based on the Age
    
    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5 + additionalFactor; // Impacting the prediction based on the additionalFactor
        status_CL_prob = 0.3;
        status_D_prob = 0.2 - additionalFactor; // Impacting the prediction based on the additionalFactor
    }

    if (N_Days > 1000) {
        status_C_prob -= 0.1 + additionalFactor; // Impacting the prediction based on the additionalFactor
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
