
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2022", Drug="D-penicillamine", Age="22574", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="205.0", Albumin="3.46", Copper="65.0", Alk_Phos="2583.0", SGOT="91.45", Tryglicerides="106.0", Platelets="231.0", Prothrombin="10.6", Stage="4.0" */
    
    
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

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    // New combination of variables
    if (Age > 20000 && Cholesterol > 200 && SGOT < 100) {
        status_C_prob += 0.1;
        status_CL_prob -= 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
