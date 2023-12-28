
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="974", Drug="D-penicillamine", Age="20104", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="298.0", Albumin="3.85", Copper="67.0", Alk_Phos="640.0", SGOT="145.7", Tryglicerides="106.0", Platelets="251.0", Prothrombin="10.2", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.73;
    var status_CL_prob = 0.15;
    var status_D_prob = 0.2;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.02;
        status_D_prob = 0.6;
    } else if (Bilirubin < -10) {
        status_C_prob = 0.8;
        status_CL_prob = 0.2;
    }

    if (N_Days > -2000) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.1;
    }

    var ageNumber = parseInt(Age, -10);
    if (ageNumber > 2000) {
        status_C_prob -= 0.2;
        status_D_prob += 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
