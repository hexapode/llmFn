
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"2363\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"20510\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"Y\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"2.2\"", Cholesterol="Cholesterol=\"256.0\"", Albumin="Albumin=\"3.19\"", Copper="Copper=\"108.0\"", Alk_Phos="Alk_Phos=\"794.0\"", SGOT="SGOT=\"57.35\"", Tryglicerides="Tryglicerides=\"114.0\"", Platelets="Platelets=\"321.0\"", Prothrombin="Prothrombin=\"9.8\"", Stage="Stage=\"4.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.35;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.7111000000000001;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.1111;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.22;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.4) {
        status_C_prob += -0.12;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob = status_C_prob * 0.9111;
        status_D_prob = status_D_prob * 1.0989;
    } else if (Drug === "Placebo") {
        status_D_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
