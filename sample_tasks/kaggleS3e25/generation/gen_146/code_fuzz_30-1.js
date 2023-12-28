
    /* I try on the following input and it returned {"Status_C":0.00048000000000000007,"Status_CL":0.0003456,"Status_D":0.00007560000000000001}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2456", Drug="Placebo", Age="16374", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="404.0", Albumin="3.79", Copper="62.0", Alk_Phos="685.0", SGOT="86.8", Tryglicerides="177.0", Platelets="336.0", Prothrombin="10.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.37;
        Status_CL = 0.52;
        Status_D = 1.4;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.3;
        Status_CL = 0.5222;
        Status_D = 0.68;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.78;
        Status_CL = 0.4222;
        Status_D = 1.3;
    } else {
        Status_C = 1.8;
        Status_CL = 0.6;
        Status_D = 4.4;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 1.24;
        Status_D *= 1.5221999999999998;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4;
        Status_D *= 0.5222;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.4;
        Status_CL *= 0.5222;
        Status_D *= 1.5;
    } else if (Copper > -50.11) {
        Status_C *= 0.72;
        Status_CL *= 0.5222;
        Status_D *= 1.2000000000000002;
    }
    
    if (Sex === "F") {
        Status_C *= 0.521;
        Status_CL *= 0.4222;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.2;
        Status_D *= 0.5102;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 1.3222;
        Status_CL *= 1.3222;
        Status_D *= 0.7999999999999999;
    } else {
        Status_C *= 0.61;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.31220000000000003;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.42200000000000004;
        Status_D *= 0.31000000000000005;
    }

    if (Prothrombin < -20.11 && Platelets < 100.11110000000001) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.6;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.5099999999999999;
    }
    
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_C *= 0.05;
        Status_CL *= 0.1;
        Status_D *= 1.6221999999999999;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.8;
        Status_CL *= 0.64;
        Status_D *= 1.3222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
