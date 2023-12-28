
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="3092", Drug="Placebo", Age="12636", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="3.6", Cholesterol="268.0", Albumin="3.7", Copper="464.0", Alk_Phos="2139.0", SGOT="120.9", Tryglicerides="98.0", Platelets="132.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.35;

    var ageNum = parseInt(Age);
    var unusedVar = ageNum * 2; // Unused variable that impacts the prediction

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
