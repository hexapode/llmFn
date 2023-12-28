
    /* I try on the following input and it returned {"Status_C":null,"Status_CL":null,"Status_D":null}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3581", Drug="Placebo", Age="19724", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="298.0", Albumin="3.83", Copper="33.0", Alk_Phos="1282.0", SGOT="99.33", Tryglicerides="64.0", Platelets="165.0", Prothrombin="10.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (parseFloat(Prothrombin) + parseFloat(Bilirubin) + parseFloat(Stage)) / 30;
    var Status_CL = (parseFloat(Albumin) + parseFloat(Platelets) - parseFloat(Age)) / 1000;
    var Status_D = (parseFloat(Cholesterol) + parseFloat(SGOT) - parseFloat(Age)) / 1000;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
