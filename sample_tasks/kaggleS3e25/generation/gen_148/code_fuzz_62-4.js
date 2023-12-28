
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="334", Drug="Placebo", Age="24803", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="1.4", Cholesterol="175.0", Albumin="3.08", Copper="188.0", Alk_Phos="1911.0", SGOT="92.0", Tryglicerides="128.0", Platelets="144.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.4111;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.3889;

    var ageInDays = parseInt(Age) * 365;

    if (Bilirubin >= 2.0) {
        status_C_prob = -0.04;
        status_CL_prob = 0.0889;
        status_D_prob = 0.9111;
    } else if (Bilirubin < 0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.24;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.09;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0;
        status_D_prob -= 0.01;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.04;
    }

    if (ageInDays > 20000) {
        status_C_prob += 0.2111;
        status_D_prob -= 0.199;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
