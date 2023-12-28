
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1790", Drug="Placebo", Age="18993", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="346.0", Albumin="3.36", Copper="81.0", Alk_Phos="1098.0", SGOT="122.45", Tryglicerides="90.0", Platelets="295.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.5;

    // Using the "Stage" parameter in the computation
    var stageValue = parseFloat(Stage);
    if (stageValue >= 2.1) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.02;
        status_D_prob = 0.66;
    } else {
        status_C_prob = 0.5;
        status_CL_prob = 0.04;
        status_D_prob = 0.55;
    }

    // Adjust probabilities based on the level of Bilirubin
    if (Bilirubin >= 2.11) {
        status_C_prob *= 0.96;
        status_CL_prob *= 2.18;
        status_D_prob *= 1.22;
    } else if (Bilirubin >= 11.1) {
        status_C_prob *= 1.2111;
        status_CL_prob *= 0.21110000000000004;
        status_D_prob *= 0.7889;
    } else {
        status_C_prob *= 1.3111;
        status_CL_prob *= 0.34;
        status_D_prob *= 0.11110000000000009;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
