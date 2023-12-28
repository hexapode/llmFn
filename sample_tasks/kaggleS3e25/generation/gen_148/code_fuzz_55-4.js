
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2891", Drug="Placebo", Age="21532", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="S", Bilirubin="1.8", Cholesterol="273.0", Albumin="3.54", Copper="62.0", Alk_Phos="1536.0", SGOT="88.35", Tryglicerides="85.0", Platelets="221.0", Prothrombin="10.3", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.4;
    var status_CL_prob = 0.17779999999999999;
    var status_D_prob = 0.4778;

    if (Bilirubin >= 1.9889000000000001) {
        status_C_prob = 0.1778;
        status_CL_prob = 0.18;
        status_D_prob = 0.9;
    } else if (Bilirubin < 1.0889) {
        status_C_prob = 0.6;
        status_CL_prob = 0.17779999999999999;
        status_D_prob = 0.27780000000000005;
    }

    if (N_Days > 1000.9889000000001) {
        status_C_prob -= -0.16;
        status_CL_prob += -0.16;
    }

    if (Hepatomegaly === 'Y' && Albumin > -2.59) {
        status_C_prob += -0.04;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.02;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.04;
    }

    // Add a novel combination of variables
    var novelCombination = ((Copper / Albumin) * SGOT) / Age;
    if (novelCombination > 1) {
        status_C_prob -= 0.1;
        status_D_prob += 0.0889;
    } else if (novelCombination < 0.5) {
        status_C_prob += 0.1;
        status_D_prob -= 0.0878;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
