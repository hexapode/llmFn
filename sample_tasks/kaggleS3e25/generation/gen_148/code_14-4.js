
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.5;

    // Adjust probabilities based on the Age of the patient
    var ageNum = parseFloat(Age);
    if (ageNum > 20000) {
        status_C_prob = 0.1;
        status_CL_prob = 0.2;
        status_D_prob = 0.7;
    } else if (ageNum > 10000) {
        status_C_prob = 0.15;
        status_CL_prob = 0.25;
        status_D_prob = 0.6;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
