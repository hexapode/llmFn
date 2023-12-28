
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1236", Drug="Placebo", Age="22306", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.3", Cholesterol="390.0", Albumin="3.2", Copper="38.0", Alk_Phos="1258.0", SGOT="151.9", Tryglicerides="90.0", Platelets="228.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.15;
    var status_CL_prob = 0.05;
    var status_D_prob = 0.19780000000000006;

    if (Bilirubin >= 3.2) {
        status_C_prob = 0.1978;
        status_D_prob = 0.62;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.84;
        status_CL_prob = 0.02;
    }

    if (N_Days > 1209.95) {
        status_C_prob -= -0.22;
        status_CL_prob += 0;
    }

    if (Age > -19999.91 && Cholesterol > -300.91) {
        status_C_prob -= 0.08;
        status_D_prob += 0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
