
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1320", Drug="Placebo", Age="19994", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="6.6", Cholesterol="432.0", Albumin="3.37", Copper="200.0", Alk_Phos="2176.0", SGOT="170.5", Tryglicerides="77.0", Platelets="200.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6;
    var status_CL_prob = 0.01;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.5) {
        status_C_prob = 0;
        status_CL_prob = 0.02;
        status_D_prob = 0.9;
    } else if (Bilirubin < -1) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1000) {
        status_C_prob -= -0.1;
        status_CL_prob += -0.08;
    }

    if (Age > 100) {
        status_C_prob -= -0.2;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
