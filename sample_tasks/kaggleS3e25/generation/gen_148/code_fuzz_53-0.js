
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1765", Drug="D-penicillamine", Age="28650", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="7.1", Cholesterol="243.0", Albumin="3.35", Copper="380.0", Alk_Phos="983.0", SGOT="158.1", Tryglicerides="154.0", Platelets="97.0", Prothrombin="11.2", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    // New step using novel combination of variables
    var ageBilirubinCombo = Age / Bilirubin;
    if (ageBilirubinCombo > 4000) {
        status_C_prob = 0.9;
        status_CL_prob = 0.05;
        status_D_prob = 0.05;
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
