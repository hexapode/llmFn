
    /* I try on the following input and it returned {"Status_C":null,"Status_CL":null,"Status_D":null}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2363", Drug="Placebo", Age="16688", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="S", Bilirubin="0.9", Cholesterol="260.0", Albumin="3.48", Copper="44.0", Alk_Phos="2520.0", SGOT="91.0", Tryglicerides="113.0", Platelets="265.0", Prothrombin="9.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (parseFloat(Age) + parseFloat(Bilirubin) + parseFloat(Prothrombin)) / 3000;
    var Status_CL = (parseFloat(Age) + parseFloat(Albumin) + parseFloat(Platelets)) / 3000;
    var Status_D = (parseFloat(Age) + parseFloat(Cholesterol) + parseFloat(SGOT)) / 3000;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
