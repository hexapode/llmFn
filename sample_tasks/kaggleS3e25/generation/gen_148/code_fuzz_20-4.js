
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1408", Drug="D-penicillamine", Age="19246", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.6", Cholesterol="310.0", Albumin="3.56", Copper="67.0", Alk_Phos="1257.0", SGOT="122.0", Tryglicerides="118.0", Platelets="143.0", Prothrombin="10.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.45;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.3889;

    var ageNum = parseInt(Age);

    if (Bilirubin >= 2.0) {
        status_C_prob = 0;
        status_CL_prob = 0.08;
        status_D_prob = 0.74;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.67;
        status_CL_prob = 0.02;
        status_D_prob = 0.1889;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.11;
        status_CL_prob += 0;
    }

    if (ageNum > -15000) {
        status_C_prob += 0.2111;
        status_D_prob -= 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
