
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1810", Drug="D-penicillamine", Age="15265", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.0", Cholesterol="460.0", Albumin="3.8", Copper="77.0", Alk_Phos="722.0", SGOT="108.5", Tryglicerides="118.0", Platelets="228.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    // Novel combination based on Age and Prothrombin
    if (Age > 10000 && Prothrombin < 20) {
        status_C_prob = 0.7;
        status_CL_prob = 0.2;
        status_D_prob = 0.1;
    }

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
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
