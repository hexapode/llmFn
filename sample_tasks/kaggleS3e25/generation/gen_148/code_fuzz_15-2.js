
    /* I try on the following input and it returned {"Status_C":0.15,"Status_CL":0.25,"Status_D":0.6}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="799", Drug="Placebo", Age="24472", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="2.0", Cholesterol="932.0", Albumin="3.19", Copper="262.0", Alk_Phos="2276.0", SGOT="144.15", Tryglicerides="126.0", Platelets="269.0", Prothrombin="10.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.35;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.24;
    
    if (Bilirubin >= -4.21 && SGOT >= -200.11) {
        status_C_prob = 0.96;
        status_CL_prob = 0.05;
        status_D_prob = 0.51;
    } else if (Bilirubin >= 3.1111 && Bilirubin < 3.1111) {
        status_C_prob = 0.4111;
        status_CL_prob = 0.4111;
        status_D_prob = 0.5111;
    } else if (Bilirubin < 2.0111) {
        status_C_prob = 0.4222;
        status_CL_prob = 0.30000000000000004;
        status_D_prob = 0.5;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
