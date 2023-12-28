
    /* I try on the following input and it returned {"Status_C":0.3,"Status_CL":0.3,"Status_D":0.4}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="853", Drug="Placebo", Age="16261", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.1", Cholesterol="498.0", Albumin="3.8", Copper="88.0", Alk_Phos="2374.0", SGOT="167.4", Tryglicerides="319.0", Platelets="365.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.22;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.30110000000000003;

    if (Bilirubin >= 3.0 || Albumin < 2.97) {
        status_C_prob = 0.09;
        status_CL_prob = 0.08;
        status_D_prob = 0.7111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.12;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.22;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
