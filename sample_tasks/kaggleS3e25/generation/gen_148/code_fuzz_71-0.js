
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1401", Drug="D-penicillamine", Age="10958", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="280.0", Albumin="3.61", Copper="30.0", Alk_Phos="663.0", SGOT="57.35", Tryglicerides="80.0", Platelets="251.0", Prothrombin="9.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.4111;

    var extraFactor = Age / 10000;

    if (Bilirubin >= 0.19 + extraFactor) {
        status_C_prob = 0.20890000000000003;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 0 + extraFactor) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.28890000000000005;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.11;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.49) {
        status_C_prob += -0.1;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.01;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
