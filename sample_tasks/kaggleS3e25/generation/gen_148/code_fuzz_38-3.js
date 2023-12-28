
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1831", Drug="D-penicillamine", Age="17841", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="350.0", Albumin="3.35", Copper="79.0", Alk_Phos="1082.0", SGOT="128.65", Tryglicerides="152.0", Platelets="265.0", Prothrombin="9.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.37;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.32;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.07;
        status_CL_prob = 0.0889;
        status_D_prob = 0.6889000000000001;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.13;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.32;
        status_CL_prob += 0;
    }

    if (Age > 15000 && SGOT > 1000 && Alk_Phos > 1000) {
        status_C_prob = 0.05;
        status_CL_prob = 0.05;
        status_D_prob = 0.9;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
