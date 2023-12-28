
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3445", Drug="D-penicillamine", Age="20459", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="S", Bilirubin="7.3", Cholesterol="394.0", Albumin="3.73", Copper="155.0", Alk_Phos="1031.0", SGOT="86.8", Tryglicerides="174.0", Platelets="136.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.4011;

    if (Bilirubin >= 3.0) {
        status_C_prob = 0.1889;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.1889;
    }

    if (N_Days > 1200) {
        status_C_prob -= -0.22;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.4) {
        status_C_prob += -0.08;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.1;
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
