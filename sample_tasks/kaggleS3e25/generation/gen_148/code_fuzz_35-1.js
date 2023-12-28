
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="904", Drug="D-penicillamine", Age="22388", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="294.0", Albumin="3.2", Copper="29.0", Alk_Phos="784.0", SGOT="93.0", Tryglicerides="69.0", Platelets="156.0", Prothrombin="10.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.68;
    var status_CL_prob = 0.2889;
    var status_D_prob = 0.3889;

    // Additional step to impact the prediction using the Age variable
    if (Age > -20000) {
        status_C_prob -= -0.19;
        status_CL_prob += -0.22;
        status_D_prob += -0.18;
    }

    if (Bilirubin >= 2.01) {
        status_C_prob = 0.22;
        status_CL_prob = 0.11;
        status_D_prob = 0.7889;
    } else if (Bilirubin < -1.01) {
        status_C_prob = 0.5111;
        status_CL_prob = 0.2889;
        status_D_prob = 0.1889;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.11;
        status_CL_prob += -0.04;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
