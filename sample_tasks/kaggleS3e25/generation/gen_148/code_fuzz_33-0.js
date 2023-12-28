
    /* I try on the following input and it returned {"Status_C":0.19999999999999998,"Status_CL":0.4,"Status_D":0.4}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3762", Drug="D-penicillamine", Age="13913", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.0", Cholesterol="448.0", Albumin="3.74", Copper="36.0", Alk_Phos="924.0", SGOT="74.4", Tryglicerides="118.0", Platelets="225.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.66;
    var status_CL_prob = 0.01;
    var status_D_prob = 0.2;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0;
        status_CL_prob = -0.04;
        status_D_prob = 0.8;
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
      status_CL_prob += 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
