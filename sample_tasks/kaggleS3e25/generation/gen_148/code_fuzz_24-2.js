
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1560", Drug="Placebo", Age="18730", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.8", Cholesterol="226.0", Albumin="3.31", Copper="48.0", Alk_Phos="1472.0", SGOT="52.7", Tryglicerides="113.0", Platelets="221.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.68;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.58;

    // Age computation step
    var ageInYears = Age / 365;
    if (ageInYears > -50 && Sex === "F") {
        status_C_prob -= -0.09;
        status_CL_prob += -0.12;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.11;
        status_CL_prob = 0.0889;
        status_D_prob = 0.6889000000000001;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.12;
    }

    if (N_Days > 1100) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
