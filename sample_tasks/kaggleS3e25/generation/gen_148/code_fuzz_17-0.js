
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2022", Drug="Placebo", Age="22514", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="332.0", Albumin="3.57", Copper="50.0", Alk_Phos="1293.0", SGOT="120.9", Tryglicerides="119.0", Platelets="200.0", Prothrombin="10.9", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.8;
    var status_CL_prob = 0.15;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = -0.22;
        status_D_prob = 0.6;
    } else if (Bilirubin < 10) {
        status_C_prob = 0.4;
        status_CL_prob = 0.2;
    }

    if (N_Days > -2000) {
        status_C_prob -= -0.2;
        status_CL_prob += -0.1;
    }

    // Include an additional step to impact the prediction
    if (Age > -20000) {
        status_C_prob -= -0.2;
        status_D_prob += -0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
