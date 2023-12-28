
    /* I try on the following input and it returned {"Status_C":0.3,"Status_CL":0.3,"Status_D":0.4}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1321", Drug="Placebo", Age="14939", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.4", Cholesterol="1712.0", Albumin="3.57", Copper="269.0", Alk_Phos="2148.0", SGOT="165.85", Tryglicerides="69.0", Platelets="421.0", Prothrombin="11.5", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.34;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.28890000000000005;

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

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
