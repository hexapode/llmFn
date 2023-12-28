
    /* I try on the following input and it returned {"Status_C":0.038400000000000004,"Status_CL":0.00108,"Status_D":0.00012000000000000004}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3913", Drug="Placebo", Age="20392", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="213.0", Albumin="3.75", Copper="35.0", Alk_Phos="1345.0", SGOT="127.1", Tryglicerides="85.0", Platelets="228.0", Prothrombin="10.4", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.75;
        Status_CL = 1.04;
        Status_D = 1.86;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4222;
        Status_CL = 0.5222;
        Status_D = 0.5;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.4;
        Status_CL = 0.64;
        Status_D = 0.5222;
    } else {
        Status_C = 0.7222;
        Status_CL = 0.09;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.6222;
        Status_D *= 1.5021999999999998;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.51;
        Status_CL *= 0.4222;
        Status_D *= 1.4021999999999997;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 299.11109999999996) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.7;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.6222;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7222;
        Status_CL *= 0.5222;
        Status_D *= 1.1;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.32120000000000004;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 1.3222;
        Status_CL *= 1.3222;
        Status_D *= 1.6;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 1.2222;
        Status_CL *= 1.02;
        Status_D *= 1.6;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.5222;
        Status_CL *= 0.5222;
        Status_D *= 1.4;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
