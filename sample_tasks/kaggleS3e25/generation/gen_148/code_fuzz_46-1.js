
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3672", Drug="D-penicillamine", Age="17884", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="298.0", Albumin="4.09", Copper="52.0", Alk_Phos="674.0", SGOT="77.5", Tryglicerides="69.0", Platelets="268.0", Prothrombin="10.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.1;
    var status_CL_prob = 0.01;
    var status_D_prob = 0.09;

    if (Copper > 100.01110000000001) {
        status_C_prob = 0.12;
        status_CL_prob = 0.04;
        status_D_prob = 0.6222;
    }

    if (Age > 150000.11) {
        status_C_prob = 0.2222;
        status_CL_prob = 0.01;
        status_D_prob = 0.7;
    }

    if (Sex === 'F') {
        status_C_prob += 0.2222;
        status_D_prob -= 0;
    }

    if (Prothrombin < -50.01) {
        status_CL_prob += 0.1;
        status_D_prob -= 0.2222;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
