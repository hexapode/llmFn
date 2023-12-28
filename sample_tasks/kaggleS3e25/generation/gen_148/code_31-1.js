
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    var ageFactor = Math.exp(-Age / 150000);
    var stageFactor = Stage / 10.0;
    var albuminFactor = Albumin / 4.0;
    var bilirubinFactor = Bilirubin / 3.0;

    var combinedFactor = ageFactor * stageFactor * albuminFactor * bilirubinFactor;

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob * combinedFactor,
        Status_CL: status_CL_prob * combinedFactor,
        Status_D: status_D_prob * combinedFactor
    };
}
