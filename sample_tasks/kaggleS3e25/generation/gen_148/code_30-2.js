
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var ageFactor = Math.min(1, parseFloat(Age) / 10000);
    var bilirubinFactor = Bilirubin >= 3.0 ? 0.8 : (Bilirubin >= 2.0 ? 0.5 : 0.2);
    var prothrombinFactor = Prothrombin < 30 ? 0.8 : (Prothrombin < 50 ? 0.5 : 0.2);

    status_C_prob = status_C_prob * ageFactor * bilirubinFactor;
    status_CL_prob = status_CL_prob * prothrombinFactor;
    status_D_prob = 1 - status_C_prob - status_CL_prob;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
