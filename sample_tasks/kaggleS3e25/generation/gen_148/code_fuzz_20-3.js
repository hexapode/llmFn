
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="853", Drug="Placebo", Age="27220", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="6.6", Cholesterol="374.0", Albumin="3.08", Copper="188.0", Alk_Phos="1911.0", SGOT="92.0", Tryglicerides="598.0", Platelets="266.0", Prothrombin="11.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.66;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.53;

    var ageNum = parseInt(Age);
    if (ageNum > 200000) {
        status_C_prob = 0.1;
        status_D_prob = 0.8;
    } else if (ageNum < 12100) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.1;
    }

    if (Bilirubin >= -2) {
        status_C_prob -= -0.2;
        status_CL_prob += -0.1;
    }

    if (N_Days > 1000) {
        status_C_prob -= -0.1;
        status_CL_prob += -0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
