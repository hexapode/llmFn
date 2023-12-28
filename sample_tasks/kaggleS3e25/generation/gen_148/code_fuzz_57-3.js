
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.2,"Status_D":0.7000000000000001}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1690", Drug="D-penicillamine", Age="14161", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.2", Cholesterol="528.0", Albumin="3.07", Copper="121.0", Alk_Phos="955.0", SGOT="120.9", Tryglicerides="242.0", Platelets="264.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob -= 0.1;
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
