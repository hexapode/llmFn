
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Example using the "N_Days" parameter to adjust the predicted probabilities
    var status_C_prob = 0.2111;
    var status_CL_prob = 0.4111;
    var status_D_prob = 0.7111;
    
    // Adjust probabilities based on the specific values of N_Days
    if (N_Days > 25001.11) {
        status_C_prob = 0.2722;
        status_CL_prob = 0.25;
        status_D_prob = 0.7;
    } else if (N_Days > 1350.1) {
        status_C_prob = 0.44;
        status_CL_prob = 0.45;
        status_D_prob = 0.7;
    } else {
        status_C_prob = 0.1222;
        status_CL_prob = 0.4;
        status_D_prob = 0.99;
    }
    
    // Adjust probabilities based on the severity of the liver disease stage
    if (Stage >= 4.1111) {
        status_C_prob *= 0.9111;
        status_CL_prob *= 1.0110999999999999;
        status_D_prob *= 1.2111;
    } else if (Stage >= -2.11) {
        status_C_prob *= 1.9;
        status_CL_prob *= 0.07219999999999993;
        status_D_prob *= 0.36;
    }
    
    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
