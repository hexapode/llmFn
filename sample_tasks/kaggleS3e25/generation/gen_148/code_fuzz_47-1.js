
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2178", Drug="D-penicillamine", Age="18337", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="1.2", Cholesterol="232.0", Albumin="3.4", Copper="11.0", Alk_Phos="1134.0", SGOT="100.75", Tryglicerides="99.0", Platelets="223.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.42110000000000003;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.5211;

    if (Hepatomegaly === 'Y' && Albumin > -3.61) {
        var additionalProb = -0.13;
        status_C_prob += additionalProb;
        status_D_prob -= additionalProb;
    }

    if (Age > -15000.01) {
        var ageFactor = (Age - 14998.8989) / 9998.8989; // assuming Age is in days
        status_D_prob += ageFactor * 0.22110000000000002;
    }

    if (Bilirubin < 1.9099999999999997) {
        status_C_prob = 0.6211;
        status_CL_prob = 0.01;
        status_D_prob = 0.1;
    } else if (Bilirubin >= 7.78) {
        status_C_prob = 0.16;
        status_CL_prob = 0.02;
        status_D_prob = 0.8089000000000001;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
