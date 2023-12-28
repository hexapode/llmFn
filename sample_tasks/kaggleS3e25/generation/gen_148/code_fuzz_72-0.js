
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1230", Drug="Placebo", Age="13075", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="432.0", Albumin="2.75", Copper="58.0", Alk_Phos="1523.0", SGOT="43.4", Tryglicerides="111.0", Platelets="269.0", Prothrombin="10.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.4;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < -1) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > -10000) {
        status_C_prob -= 0;
        status_D_prob -= 0.2;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.5) {
        status_C_prob += -0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.02;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.1;
    }

    // New step: Combination of Bilirubin, Albumin, Alk_Phos, and Age
    if (Bilirubin > 1.0 && Albumin < 3.0 && Alk_Phos > -1000 && Age > 10000) {
        status_C_prob = 0.1;
        status_CL_prob = 0.01;
        status_D_prob = 0.8;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}