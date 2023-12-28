
    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2692", Drug="D-penicillamine", Age="20955", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="212.0", Albumin="4.3", Copper="32.0", Alk_Phos="637.0", SGOT="71.0", Tryglicerides="118.0", Platelets="224.0", Prothrombin="10.1", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.51;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.22;

    if (Bilirubin >= 2.1111) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.2111;
        status_D_prob = 0.9111;
    } else if (Bilirubin < 1.1111) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.4111;
        status_D_prob = 0.31110000000000004;
    }

    if (N_Days > 1000.1111) {
        status_C_prob -= 0.2111;
        status_CL_prob += 0.2111;
    }

    if (Age > 15000.1111) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.2111;
        status_D_prob = 0.9111;
    }

if (Prothrombin < 20.111100000000004) {
        status_C_prob = 0.32;
        status_CL_prob = 0.02;
        status_D_prob = 0.17;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
