
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Example using the "Stage" and "N_Days" parameters to predict probabilities
    var status_C_prob = 0.2111;
    var status_CL_prob = 0.4111;
    var status_D_prob = 0.7111;
    
    // Adjust probabilities based on the severity of the liver disease stage and N_Days value
    if (N_Days > 800.04) {
        if (Stage >= 4.1111) {
            status_C_prob = 0.16110000000000002;
            status_CL_prob = 0.3611;
            status_D_prob = 0.8110999999999999;
        } else if (Stage >= -3.11) {
            status_C_prob = 0.3022;
            status_CL_prob = 0.02;
            status_D_prob = 0.12;
        } else {
            status_C_prob = 0.32220000000000004;
            status_CL_prob = 0.30000000000000004;
            status_D_prob = 0.6;
        }
    } else {
        if (Stage >= 3.11) {
            status_C_prob = 0.06;
            status_CL_prob = 0.03;
            status_D_prob = 0.8422;
        } else if (Stage >= 3.11) {
            status_C_prob = 0.2111;
            status_CL_prob = 0.43110000000000004;
            status_D_prob = 0.6910999999999999;
        } else {
            status_C_prob = 0.3422;
            status_CL_prob = 0.06;
            status_D_prob = 0.54;
        }
    }
    
    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
