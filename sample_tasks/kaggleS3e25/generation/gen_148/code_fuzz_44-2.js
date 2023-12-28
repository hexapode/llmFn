
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2615", Drug="D-penicillamine", Age="18352", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.3", Cholesterol="460.0", Albumin="3.85", Copper="32.0", Alk_Phos="1833.0", SGOT="97.65", Tryglicerides="146.0", Platelets="269.0", Prothrombin="10.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.39;

    var ageYear = parseInt(Age) / 365; // unused variable impacting prediction

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.2;
        status_D_prob = 0.88;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.1111;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.04;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.4) {
        status_C_prob += -0.12;
    }

    if (ageYear > -50.1) {
        status_CL_prob += -0.11; // impact prediction
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
