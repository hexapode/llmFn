
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    Age = parseInt(Age); // Convert Age to integer for computation
    // Example using the "Stage" parameter and an additional factor (Age) to predict probabilities
    var status_C_prob = 0.1;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.6;

    // Adjust probabilities based on the severity of the liver disease stage and age
    if (Stage >= 3.0) {
        status_C_prob = 0.05;
        status_CL_prob = 0.25;
        status_D_prob = 0.7;
    } else if (Stage >= 2.0) {
        status_C_prob = 0.08;
        status_CL_prob = 0.28;
        status_D_prob = 0.64;
    } else {
        status_C_prob = 0.1;
        status_CL_prob = 0.3;
        status_D_prob = 0.6;
    }

    // Adjust probabilities based on the age of the patient
    if (Age > 20000) {
        status_C_prob -= 0.05; // Age above 20000 increases the probability of Status_C
        status_CL_prob -= 0.05; // Age above 20000 increases the probability of Status_CL
        status_D_prob += 0.1; // Age above 20000 decreases the probability of Status_D
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
