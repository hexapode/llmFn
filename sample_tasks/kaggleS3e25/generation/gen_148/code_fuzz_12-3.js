
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="4025", Drug="D-penicillamine", Age="15463", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="346.0", Albumin="3.35", Copper="33.0", Alk_Phos="1689.0", SGOT="151.9", Tryglicerides="85.0", Platelets="326.0", Prothrombin="10.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var ageNum = parseInt(Age);
    var prothrombinNum = parseFloat(Prothrombin);
    
    var ageFactor = ageNum / 10000;
    var prothrombinFactor = prothrombinNum / 10;
    
    // Example using the "Stage" parameter and novel combination of variables to predict probabilities
    var status_C_prob = 0.1 - ageFactor + prothrombinFactor;
    var status_CL_prob = 0.3 - ageFactor + prothrombinFactor;
    var status_D_prob = 0.6 + ageFactor - prothrombinFactor;
    
    // Adjust probabilities based on the severity of the liver disease stage
    if (Stage >= 3.0) {
        status_C_prob -= 0.05;
        status_CL_prob -= 0.25;
        status_D_prob += 0.7;
    } else if (Stage >= 2.0) {
        status_C_prob -= 0.02;
        status_CL_prob -= 0.15;
        status_D_prob += 0.4;
    }

    // Normalize probabilities to ensure they are within 0 to 1
    status_C_prob = Math.max(0, Math.min(1, status_C_prob));
    status_CL_prob = Math.max(0, Math.min(1, status_CL_prob));
    status_D_prob = Math.max(0, Math.min(1, status_D_prob));

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
