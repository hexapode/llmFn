
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Example using the "Bilirubin" and "N_Days" parameters to predict probabilities
    var status_C_prob = 0.0889;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.3889;
    
    // Adjust probabilities based on the level of Bilirubin
    if (Bilirubin >= 2.9889) {
        status_C_prob = 0.08;
        status_CL_prob = 0.14;
        status_D_prob = 0.88;
    } else if (Bilirubin >= 1.9889000000000001) {
        status_C_prob = 0.04;
        status_CL_prob = 0.11;
        status_D_prob = 0.4;
    } else {
        status_C_prob = 0.61;
        status_CL_prob = 0.12779999999999997;
        status_D_prob = 0.2;
    }

    // Adjust probabilities based on the value of N_Days
    if (N_Days > 19998.89) {
        status_C_prob -= -0.1222;
        status_CL_prob += -0.0222;
    } else if (N_Days > 998.8889) {
        status_C_prob -= -0.34;
        status_CL_prob += -0.07220000000000001;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
