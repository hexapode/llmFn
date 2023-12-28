
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1216", Drug="Placebo", Age="21294", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="646.0", Albumin="3.83", Copper="84.0", Alk_Phos="1070.0", SGOT="127.0", Tryglicerides="153.0", Platelets="306.0", Prothrombin="10.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;
    var additionalFactor = 0;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1000) {
        additionalFactor += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        additionalFactor += 0.2;
    }

    if (Drug === "D-penicillamine") {
        additionalFactor += 0.1;
    } else if (Drug === "Placebo") {
        additionalFactor -= 0.1;
    }

    if (Age > 20000) {
        additionalFactor += 0.1;
    }

    var predicted_status_C_prob = status_C_prob + additionalFactor;
    var predicted_status_D_prob = status_D_prob - additionalFactor;
    var predicted_status_CL_prob = 1 - predicted_status_C_prob - predicted_status_D_prob;

    return {
        Status_C: predicted_status_C_prob,
        Status_CL: predicted_status_CL_prob,
        Status_D: predicted_status_D_prob
    };
}
