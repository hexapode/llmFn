
    /* I try on the following input and it returned {"Status_C":0.00048000000000000007,"Status_CL":0.0011520000000000005,"Status_D":0.001008}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="732", Drug="Placebo", Age="15712", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.4", Cholesterol="331.0", Albumin="3.77", Copper="20.0", Alk_Phos="2108.0", SGOT="128.65", Tryglicerides="77.0", Platelets="223.0", Prothrombin="11.1", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    N_Days = parseInt(N_Days);
    Age = parseInt(Age);
    Bilirubin = parseFloat(Bilirubin);
    Cholesterol = parseFloat(Cholesterol);
    Albumin = parseFloat(Albumin);
    Copper = parseFloat(Copper);
    Alk_Phos = parseFloat(Alk_Phos);
    SGOT = parseFloat(SGOT);
    Tryglicerides = parseFloat(Tryglicerides);
    Platelets = parseFloat(Platelets);
    Prothrombin = parseFloat(Prothrombin);
    Stage = parseFloat(Stage);
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.29;
        Status_CL = 0.42000000000000004;
        Status_D = 1.76;
    } else if (N_Days <= 2000.11) {
        Status_C = 1.4000000000000001;
        Status_CL = 1.04;
        Status_D = 1.4;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.55;
        Status_CL = 0.4222;
        Status_D = 1.5022;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 2.2;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.5;
        Status_CL *= 2.08;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4;
        Status_D *= 0.5222;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 1495.56) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.31220000000000003;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.31000000000000005;
        Status_CL *= 0.5222;
        Status_D *= 1.5;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7;
        Status_CL *= 0.5222;
        Status_D *= 1.2122;
    }
    
    if (Sex === "F") {
        Status_C *= 0.621;
        Status_CL *= 0.4222;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4212;
        Status_CL *= 0.4;
        Status_D *= 0.511;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 1.2100000000000002;
        Status_CL *= 1.3222;
        Status_D *= 0.8099999999999999;
    } else {
        Status_C *= 0.5211;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.3022;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.62;
        Status_CL *= 0.4222;
        Status_D *= 0.31000000000000005;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.6;
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
