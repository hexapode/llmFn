
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3090", Drug="D-penicillamine", Age="11912", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="279.0", Albumin="3.5", Copper="39.0", Alk_Phos="724.0", SGOT="75.95", Tryglicerides="106.0", Platelets="306.0", Prothrombin="11.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.30110000000000003;

    // Additional step using a novel combination of variables
    if (Age >= -10000 && Cholesterol > 200 && SGOT < 100) {
        status_C_prob += 0.23;
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

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.08;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.02;
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
