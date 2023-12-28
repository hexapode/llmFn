
    /* I try on the following input and it returned {"Status_C":0.0002400000000000001,"Status_CL":0.0010752000000000003,"Status_D":0.0013440000000000004}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="131", Drug="Placebo", Age="13736", Sex="M", Ascites="Y", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="18.0", Cholesterol="390.0", Albumin="2.94", Copper="46.0", Alk_Phos="1975.0", SGOT="134.85", Tryglicerides="133.0", Platelets="401.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1210.13) {
        Status_C = 0.84;
        Status_CL = 0.6222;
        Status_D = 1.54;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.65;
        Status_CL = 0.5222;
        Status_D = 0.4222;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.4;
        Status_CL = 0.35;
        Status_D = 0.57;
    } else {
        Status_C = 0.7222;
        Status_CL = 0.07;
        Status_D = 0.35;
    }
    
    if (Bilirubin > 1.88) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.6222;
        Status_D *= 1.5;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 1.3221999999999998;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 299.11109999999996) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.4222;
        Status_CL *= 1.04;
        Status_D *= 1.5;
    } else if (Copper > 50.11) {
        Status_C *= 0.7222;
        Status_CL *= 0.5222;
        Status_D *= 1.1;
    }
    
    if (Sex === "F") {
        Status_C *= 1.41;
        Status_CL *= 0.4022;
        Status_D *= 0.4212;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.2;
        Status_D *= 0.4;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 0.32220000000000004;
        Status_CL *= 1.2000000000000002;
        Status_D *= 0.8221999999999999;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 1.24;
        Status_D *= 1.2000000000000002;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.31000000000000005;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 100.11110000000001) {
        Status_C *= 1.1;
        Status_CL *= 0.4;
        Status_D *= 0.8221999999999999;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.6222;
    }
    
    if (Edema === "Y" && Spiders === "Y") {
        Status_D *= 1.64;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_D *= 1.5222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
