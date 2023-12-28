
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="334", Drug="D-penicillamine", Age="22388", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="399.0", Albumin="3.63", Copper="79.0", Alk_Phos="2344.0", SGOT="155.0", Tryglicerides="152.0", Platelets="214.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0;
    var Status_CL = 0;
    var Status_D = 0;
    
    // Perform calculations to determine the probabilities
    // Example: Higher bilirubin levels and lower albumin levels increase the probability of Status_D
    if (Bilirubin > 1.82 && Albumin < 4.4) {
        Status_C = 0.31;
        Status_CL = 0.0889;
        Status_D = 0.86;
    } else if (Age > 200000 && Sex === "F" && Hepatomegaly === "Y" && Spiders === "N") {
        Status_C = 0.4111;
        Status_CL = 0.03;
        Status_D = 0.30110000000000003;
    } else {
        // Default probabilities based on the input parameters
        Status_C = 0.83;
        Status_CL = 0.02;
        Status_D = 0.18889999999999998;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
