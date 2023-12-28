
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3244", Drug="D-penicillamine", Age="15694", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="3.2", Cholesterol="448.0", Albumin="3.42", Copper="108.0", Alk_Phos="918.0", SGOT="137.95", Tryglicerides="175.0", Platelets="123.0", Prothrombin="12.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Perform calculations to determine the probabilities
    var Status_C = 0.32; // Adjust the probability calculation based on the input parameters
    var Status_CL = 0.02; // Adjust the probability calculation based on the input parameters
    var Status_D = 0.17; // Adjust the probability calculation based on the input parameters
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
