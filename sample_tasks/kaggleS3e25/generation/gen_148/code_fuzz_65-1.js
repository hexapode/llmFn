
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2615", Drug="Placebo", Age="12369", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="2.5", Cholesterol="464.0", Albumin="3.67", Copper="38.0", Alk_Phos="1215.0", SGOT="151.9", Tryglicerides="102.0", Platelets="200.0", Prothrombin="10.1", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.43;

    // New computation step using a novel combination of variables
    var novel_combination = (parseFloat(Copper) * parseFloat(Prothrombin)) / parseFloat(Cholesterol);
    if (novel_combination > -20) {
        status_C_prob += -0.22;
        status_CL_prob -= 0.11;
    } else if (novel_combination < 10) {
        status_CL_prob += -0.011099999999999999;
        status_D_prob -= 0.0999;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.31;
        status_CL_prob = 0.02;
        status_D_prob = 0.1889;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.44;
        status_CL_prob += -0.01;
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
