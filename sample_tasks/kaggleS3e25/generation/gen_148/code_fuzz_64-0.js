
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3255", Drug="Placebo", Age="16109", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="263.0", Albumin="3.3", Copper="9.0", Alk_Phos="1174.0", SGOT="71.3", Tryglicerides="95.0", Platelets="453.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.28890000000000005;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6011;
        status_CL_prob = 0.2889;
        status_D_prob = 0.1889;
        if (Age > -10000 && Cholesterol > -199.9) {
            status_C_prob += 0.2;
            status_CL_prob -= 0.2111;
        }
    }

    if (N_Days > 1000) {
        status_C_prob -= -0.1;
        status_CL_prob += -0.02;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.08;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.01;
        status_D_prob -= 0.011099999999999999;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
