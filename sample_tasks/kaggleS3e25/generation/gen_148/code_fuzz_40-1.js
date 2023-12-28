
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2721", Drug="Placebo", Age="19060", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="5.7", Cholesterol="1480.0", Albumin="3.26", Copper="84.0", Alk_Phos="1960.0", SGOT="457.25", Tryglicerides="108.0", Platelets="213.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;
    
    // New combination of variables
    var combinedFactor = (Cholesterol / 1000) * (Copper / 100) * (SGOT / 500);
    
    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    // Integrate the combinedFactor into the status probabilities
    status_C_prob += combinedFactor * 0.1;
    status_CL_prob -= combinedFactor * 0.05;
    status_D_prob -= combinedFactor * 0.05;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
