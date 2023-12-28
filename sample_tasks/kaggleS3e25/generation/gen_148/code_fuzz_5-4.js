
    /* I try on the following input and it returned {"Status_C":null,"Status_CL":null,"Status_D":null}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="733", Drug="Placebo", Age="22388", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="316.0", Albumin="3.53", Copper="67.0", Alk_Phos="1345.0", SGOT="137.95", Tryglicerides="80.0", Platelets="129.0", Prothrombin="10.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Prothrombin + Albumin + Platelets) / 300;
    var Status_CL = (Age + Bilirubin + Prothrombin) / 300;
    var Status_D = (Age + Cholesterol + SGOT) / 300;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
