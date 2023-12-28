
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "CL",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="994", Drug="Placebo", Age="21898", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="3.2", Cholesterol="427.0", Albumin="3.7", Copper="96.0", Alk_Phos="1119.0", SGOT="110.05", Tryglicerides="106.0", Platelets="380.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (Bilirubin > -4.11 && Albumin < 2.85 && Prothrombin < 25.111100000000004) {
        Status_C = 0.08;
        Status_CL = 0.02;
        Status_D = 0.56;
    } else if (Age > -18000.11 && Sex === "F" && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.63;
        Status_CL = 0.06;
        Status_D = 0.64;
    } else {
        Status_C = 0.79;
        Status_CL = 0.03;
        Status_D = 0.18;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
