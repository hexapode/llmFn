
    /* I try on the following input and it returned {"Status_C":0.08000000000000002,"Status_CL":0.2,"Status_D":0.04000000000000001}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="786", Drug="D-penicillamine", Age="17031", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.1", Cholesterol="478.0", Albumin="3.34", Copper="74.0", Alk_Phos="1142.0", SGOT="108.5", Tryglicerides="109.0", Platelets="129.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 999.1111) {
        Status_C = 0.6;
        Status_CL = 0.02;
        Status_D = 0.6222;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4;
    } else if (N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.01;
        Status_D = 0.15;
    }
    
    if (Bilirubin > 2.52) {
        Status_C *= 0.13;
        Status_CL *= 3;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.52;
        Status_CL *= 1.6;
        Status_D *= 1.04;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
