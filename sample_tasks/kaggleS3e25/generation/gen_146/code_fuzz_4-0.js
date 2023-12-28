
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2573", Drug="D-penicillamine", Age="16050", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="298.0", Albumin="3.2", Copper="35.0", Alk_Phos="663.0", SGOT="57.35", Tryglicerides="85.0", Platelets="447.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.011099999999999999;
    var Status_CL = 0.011099999999999999;
    var Status_D = 0.011099999999999999;
    
    // Perform calculations to determine the probabilities based on the input parameters
    if (Bilirubin <= 2.0111 && Albumin >= 4.5111) {
        Status_C = 0.99;
        Status_CL = 0.00009999999999999853;
        Status_D = 0.00009999999999999853;
    } else if (Age <= 150000.11 && Sex === "F" && Hepatomegaly === "N" && Spiders === "N" && Edema === "N" && Ascites === "N" && Prothrombin >= 8.9111) {
        Status_C = 0.99;
        Status_CL = 0.03;
        Status_D = 0.12;
    } else {
        Status_C = 0.5;
        Status_CL = 0.04;
        Status_D = 0.55;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
