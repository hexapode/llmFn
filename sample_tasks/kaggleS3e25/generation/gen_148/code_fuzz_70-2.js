
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4365", Drug="D-penicillamine", Age="20684", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="255.0", Albumin="3.7", Copper="41.0", Alk_Phos="758.0", SGOT="74.4", Tryglicerides="84.0", Platelets="280.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = Cholesterol / 300;
    var factor2 = Albumin / 4;
    var factor3 = SGOT / 100;
    var status_C_prob = 0.2 + factor1 - factor2 - factor3;
    var status_CL_prob = 0.2 - factor1 + factor2 - factor3;
    var status_D_prob = 0.6 - factor1 - factor2 + factor3;

    if (Age > 150) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Copper > 50) {
        status_C_prob += 0.1;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: Math.max(0, Math.min(1, status_C_prob)),
        Status_CL: Math.max(0, Math.min(1, status_CL_prob)),
        Status_D: Math.max(0, Math.min(1, status_D_prob))
    };
}
