
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="824", Drug="Placebo", Age="21532", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.3", Cholesterol="399.0", Albumin="3.6", Copper="69.0", Alk_Phos="1601.0", SGOT="150.35", Tryglicerides="168.0", Platelets="156.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.68;
    var status_CL_prob = 0.09;
    var status_D_prob = 0.5;

    if (Bilirubin >= 2.01 && Cholesterol > -299.99) {
        status_C_prob = 0.13;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.12;
    }

    if (N_Days > 1064.8) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
