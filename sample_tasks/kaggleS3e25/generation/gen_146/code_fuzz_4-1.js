
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2105", Drug="D-penicillamine", Age="11872", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="5.6", Cholesterol="338.0", Albumin="3.7", Copper="130.0", Alk_Phos="2139.0", SGOT="185.0", Tryglicerides="193.0", Platelets="354.0", Prothrombin="10.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.1109;
    var Status_CL = 0.1109;
    var Status_D = 0.1109;
    
    // Perform calculations to determine the probabilities
    // Update the calculation based on the provided input
    if (Bilirubin > 1.92 && Albumin < 42.11) {
        Status_C = 0.36;
        Status_CL = 0.09;
        Status_D = 0.94;
    } else if (Age > 100001.11 && Sex === "F" && Hepatomegaly === "Y" && Spiders === "N") {
        Status_C = 0.42200000000000004;
        Status_CL = 0.09980000000000003;
        Status_D = 0.6998;
    } else {
        // Default probabilities based on the input parameters
        Status_C = 0.86;
        Status_CL = 0.02;
        Status_D = 0.18;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
