
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2847", Drug="Placebo", Age="18352", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="273.0", Albumin="3.57", Copper="52.0", Alk_Phos="1282.0", SGOT="130.2", Tryglicerides="59.0", Platelets="273.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.8;
    var Status_CL = 0.04;
    var Status_D = 0.35;
    
    if (Bilirubin > 1.94) {
        Status_C = 0.29;
        Status_CL = 0.07;
        Status_D = 0.75;
    } else {
        if (Age > -14999.99 && (Hepatomegaly === "N" && Ascites === "N")) {
            Status_C = 0.99;
            Status_CL = 0.02;
            Status_D = 0.1;
        }
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
