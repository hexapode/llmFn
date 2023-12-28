
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.75;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.21;
    
    // Adjust probabilities based on the severity of the liver disease stage
    if (Stage >= 3.1111) {
        status_C_prob = 0.59;
        status_CL_prob = 0.06;
        status_D_prob = 0.91;
    }
    
    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
