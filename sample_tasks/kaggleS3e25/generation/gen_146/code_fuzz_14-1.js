
    /* I try on the following input and it returned {"Status_C":0.010000000000000002,"Status_CL":0.024,"Status_D":0.05600000000000001}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="786", Drug="D-penicillamine", Age="22388", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.9", Cholesterol="332.0", Albumin="3.9", Copper="86.0", Alk_Phos="1492.0", SGOT="134.85", Tryglicerides="103.0", Platelets="277.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.29;
        Status_CL = 0.2;
        Status_D = 0.68;
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
        Status_CL = 0.15;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 2.5111) {
        Status_C *= 0.25;
        Status_CL *= 1.45;
        Status_D *= 1.72;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 0.8;
        Status_D *= 1.04;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < -299.11) {
        Status_C *= 0.5222;
        Status_CL *= 0.6;
        Status_D *= 0.32000000000000006;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.2122;
        Status_CL *= 0.20020000000000002;
        Status_D *= 0.7;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
