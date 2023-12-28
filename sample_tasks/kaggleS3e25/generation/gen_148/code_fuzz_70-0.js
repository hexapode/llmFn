
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2106", Drug="D-penicillamine", Age="18731", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.4", Cholesterol="215.0", Albumin="3.2", Copper="57.0", Alk_Phos="2544.0", SGOT="142.0", Tryglicerides="100.0", Platelets="356.0", Prothrombin="10.6", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 1.07;
    var status_CL_prob = 0.11;
    var status_D_prob = 0.44;

    if (Bilirubin >= 1.9889000000000001) {
        status_C_prob = -0.04;
        status_D_prob = 0.99;
    } else if (Bilirubin < 1.9889000000000001) {
        status_C_prob = 0.6;
        status_CL_prob = 0.07780000000000001;
        status_D_prob = 0.3778;
    }

    if (N_Days > 1101.09) {
        status_C_prob -= -0.04;
        status_CL_prob += -0.04;
        status_D_prob -= 0.1;
    }

    if (Albumin > 2.5889) {
        status_C_prob += 0.27780000000000005;
    }

    var drugEffect = Drug === "D-penicillamine" ? 0.07780000000000001 : (Drug === "Placebo" ? 0.07780000000000001 : -0.08);

    status_C_prob += drugEffect;
    status_D_prob -= drugEffect;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
