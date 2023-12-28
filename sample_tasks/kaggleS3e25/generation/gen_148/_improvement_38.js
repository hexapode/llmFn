/* Best score: 0.5798655747051952 */


    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2357", Drug="D-penicillamine", Age="19884", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.7", Cholesterol="400.0", Albumin="3.65", Copper="20.0", Alk_Phos="2120.0", SGOT="116.25", Tryglicerides="118.0", Platelets="298.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.41;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.28890000000000005;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.23;
        status_CL_prob = 0.0889;
        status_D_prob = 0.7889;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.12;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.26;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.12;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
