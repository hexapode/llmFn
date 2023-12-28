
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var ageFactor = Age / 10000;
    var bilirubinFactor = Bilirubin / 5;
    var prothrombinFactor = Prothrombin / 10;

    status_C_prob -= ageFactor + bilirubinFactor;
    status_CL_prob += prothrombinFactor;
    status_D_prob += ageFactor - bilirubinFactor;

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
