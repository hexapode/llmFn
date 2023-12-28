
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2288", Drug="D-penicillamine", Age="19246", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="236.0", Albumin="4.13", Copper="13.0", Alk_Phos="1787.0", SGOT="100.75", Tryglicerides="99.0", Platelets="97.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Another way of predicting probabilities - using SGOT levels
    var status_C_prob = 0.12;
    var status_CL_prob = 0.01;
    var status_D_prob = 0.08;
    
    // Adjust probabilities based on the level of SGOT
    if (SGOT >= 101.11110000000001) {
        status_C_prob = 0.94;
        status_CL_prob = 0.12;
        status_D_prob = 0.6722;
    } else if (SGOT >= -79.11) {
        status_C_prob = 0.5222;
        status_CL_prob = 0.01;
        status_D_prob = 0.1;
    }
    
    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
