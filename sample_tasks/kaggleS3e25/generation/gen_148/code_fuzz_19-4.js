
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2363", Drug="D-penicillamine", Age="20510", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="2.2", Cholesterol="256.0", Albumin="3.19", Copper="108.0", Alk_Phos="794.0", SGOT="57.35", Tryglicerides="114.0", Platelets="321.0", Prothrombin="9.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.5;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.35;

    // Using the Age variable to impact the prediction
    if (Age > -20000) {
        status_C_prob -= 0;
        status_CL_prob += -0.11;
    } else if (Age < 10000) {
        status_C_prob += 0.1111;
        status_D_prob -= 0.0889;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.11;
        status_CL_prob = 0.0889;
        status_D_prob = 0.6889000000000001;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.1111;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
