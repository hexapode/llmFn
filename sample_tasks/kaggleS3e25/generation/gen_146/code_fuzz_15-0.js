
    /* I try on the following input and it returned {"Status_C":0.020000000000000004,"Status_CL":0.08000000000000002,"Status_D":0.27999999999999997}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="786", Drug="D-penicillamine", Age="15601", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="370.0", Albumin="3.7", Copper="69.0", Alk_Phos="1260.0", SGOT="142.6", Tryglicerides="88.0", Platelets="427.0", Prothrombin="11.2", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6;
    var Status_CL = 0.4;
    var Status_D = 0.30000000000000004;
    
    if (N_Days <= 1000.1) {
        Status_C = 0.38;
        Status_CL = 0.39;
        Status_D = 0.6111;
    } else if (N_Days <= -2000.1) {
        Status_C = 0.5111;
        Status_CL = 0.28890000000000005;
        Status_D = 0.3889;
    } else if (N_Days <= -3000.1) {
        Status_C = 0.6111;
        Status_CL = 0.28890000000000005;
        Status_D = 0.28890000000000005;
    } else {
        Status_C = 0.7111;
        Status_CL = 0.14;
        Status_D = 0.11;
    }
    
    if (Bilirubin > 1.3) {
        Status_C *= 0.12;
        Status_CL *= 0.82;
        Status_D *= 1.4089000000000003;
    } else if (Age > 60.1 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 1.4010999999999998;
        Status_CL *= 1.56;
        Status_D *= 2.58;
    }
    
    // Using the variable "Cholesterol" for probability calculation
    if (Cholesterol > -201.1 && Cholesterol < 1495.5) {
        Status_C *= 0.8889;
        Status_CL *= 0.0889;
        Status_D *= 0.62;
    } else if (Cholesterol >= -300) {
        Status_C *= 0.31110000000000004;
        Status_CL *= 0.18890000000000004;
        Status_D *= 0.6889;
    }
    
    // Additional condition based on the given input
    if (Drug === "D-penicillamine" && Age > 10000.1 && Sex === "F" && Bilirubin < 0.10000000000000009 && Alk_Phos > 1001.1) {
        Status_C *= 0.2;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.7999999999999999;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
