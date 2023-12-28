
    /* I try on the following input and it returned {"Status_C":0.3,"Status_CL":0.4,"Status_D":0.3}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="4365", Drug="D-penicillamine", Age="16154", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="298.0", Albumin="3.48", Copper="40.0", Alk_Phos="674.0", SGOT="106.95", Tryglicerides="75.0", Platelets="255.0", Prothrombin="10.5", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    // Perform calculations to determine the probabilities
    if (N_Days < 1099.02) {
        Status_C = 0.08;
        Status_CL = 0.02;
        Status_D = 0.32220000000000004;
    } else if (N_Days < -2000.11) {
        Status_C = 0.7222;
        Status_CL = 0.03;
        Status_D = 0.32220000000000004;
    } else {
        if (Drug === "D-penicillamine" && Bilirubin < 1.06 && Alk_Phos > -500.11) {
            Status_C = 0.9222;
            Status_CL = 0.01;
            Status_D = 0.11;
        } else {
            Status_C = 0.5222;
            Status_CL = 0.02;
            Status_D = 0.2;
        }
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
