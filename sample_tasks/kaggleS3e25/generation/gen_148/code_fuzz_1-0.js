
    /* I try on the following input and it returned {"Status_C":null,"Status_CL":null,"Status_D":null}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2468", Drug="Placebo", Age="17233", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="4.7", Cholesterol="267.0", Albumin="3.2", Copper="24.0", Alk_Phos="1391.0", SGOT="196.85", Tryglicerides="85.0", Platelets="151.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Age / 1000 + Bilirubin / 10 + Prothrombin / 100) / 3;
    var Status_CL = (Age / 1000 + Albumin / 10 + Platelets / 100) / 3;
    var Status_D = (Age / 1000 + Cholesterol / 10 + SGOT / 100) / 3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
