
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2363", Drug="D-penicillamine", Age="20597", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="255.0", Albumin="3.37", Copper="37.0", Alk_Phos="1440.0", SGOT="127.71", Tryglicerides="58.0", Platelets="224.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.35;

    var ageNum = parseInt(Age);
    var novelCombination = ageNum / (parseFloat(Cholesterol) * parseFloat(Copper));

    if (novelCombination > 100) {
        status_CL_prob += 0.2;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.31;
        status_CL_prob = 0.01;
        status_D_prob = 0.1889;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.44;
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
