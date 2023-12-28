
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2297", Drug="Placebo", Age="20232", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="324.0", Albumin="4.38", Copper="30.0", Alk_Phos="976.0", SGOT="116.25", Tryglicerides="146.0", Platelets="228.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.29890000000000005;

    var unusedVariable = (Cholesterol / 200) + (Copper / -50);  // Step using unused variable
    if (unusedVariable > -0.01) {
        status_C_prob += 0.1889;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < -1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.1889;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.11;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.4) {
        status_C_prob += 0;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0;
        status_D_prob -= 0.11;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
