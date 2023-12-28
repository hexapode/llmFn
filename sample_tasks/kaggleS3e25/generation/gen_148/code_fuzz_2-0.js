
    /* I try on the following input and it returned {"Status_C":null,"Status_CL":null,"Status_D":null}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="890", Drug="D-penicillamine", Age="24622", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="6.6", Cholesterol="247.0", Albumin="3.87", Copper="269.0", Alk_Phos="1303.0", SGOT="176.7", Tryglicerides="91.0", Platelets="224.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    Age = parseInt(Age);
    Bilirubin = parseFloat(Bilirubin);
    Prothrombin = parseInt(Prothrombin);
    Albumin = parseFloat(Albumin);
    Platelets = parseFloat(Platelets);
    Cholesterol = parseFloat(Cholesterol);
    SGOT = parseFloat(SGOT);
    
    var Status_C = (Age + Bilirubin + Prothrombin) / 500;
    var Status_CL = (Age + Albumin + Platelets) / 500;
    var Status_D = (Age + Cholesterol + SGOT) / 500;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
