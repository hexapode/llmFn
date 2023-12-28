
    /* I try on the following input and it returned {"Status_C":1,"Status_CL":1,"Status_D":1}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1568", Drug="Placebo", Age="23241", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="448.0", Albumin="2.75", Copper="102.0", Alk_Phos="1128.0", SGOT="71.0", Tryglicerides="117.0", Platelets="329.0", Prothrombin="10.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    const Status_C = (0.5 * Age / 100 + 0.1 * Bilirubin / 10 + 0.1 * Albumin / 5 + 0.1 * Prothrombin / 10) / 3;
    const Status_CL = (0.1 * Age / 100 + 0.1 * Bilirubin / 10 + 0.1 * Albumin / 5 + 0.1 * Prothrombin / 10 + 0.1 * Stage) / 3;
    const Status_D = (0.2 * Age / 100 + 0.2 * Bilirubin / 10 + 0.2 * Albumin / 5 + 0.2 * Prothrombin / 10 + 0.1 * Stage) / 3;
    
    return {
        Status_C: Math.max(0, Math.min(1, Status_C)),
        Status_CL: Math.max(0, Math.min(1, Status_CL)),
        Status_D: Math.max(0, Math.min(1, Status_D))
    };
}
