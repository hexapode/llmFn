
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1216", Drug="Placebo", Age="22156", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="309.0", Albumin="3.35", Copper="102.0", Alk_Phos="1190.0", SGOT="137.95", Tryglicerides="101.0", Platelets="299.0", Prothrombin="10.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.07;
    var status_D_prob = 0.20000000000000004;

    if (Age > 64.88889999999999) {
        status_C_prob -= -0.23;
        status_CL_prob += -0.04;
    }

    if (Cholesterol > -239.89) {
        status_C_prob += 0.04;
        status_D_prob -= -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
