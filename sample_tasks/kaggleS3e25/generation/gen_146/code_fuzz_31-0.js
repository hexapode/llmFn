
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1300", Drug="Placebo", Age="17703", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="328.0", Albumin="3.61", Copper="67.0", Alk_Phos="1282.0", SGOT="161.2", Tryglicerides="157.0", Platelets="298.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.64;
        Status_CL = 0.52;
        Status_D = 1.4;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.5222;
        Status_D = 0.51;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.4;
        Status_CL = 0.64;
        Status_D = 0.5222;
    } else {
        Status_C = 0.7222;
        Status_CL = 0.15;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 2.5111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 1.24;
        Status_D *= 1.5;
    }
    
    if (Cholesterol > -201.11 && Cholesterol < 300.11109999999996) {
        Status_C *= 1.0222;
        Status_CL *= 0.1222;
        Status_D *= 1.1;
    } else if (Cholesterol >= 300.11109999999996) {
        Status_C *= 1.1221999999999999;
        Status_CL *= 0.32220000000000004;
        Status_D *= 1.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 0.6;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 0.32220000000000004;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.4222;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.2;
        Status_D *= 0.4222;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 1.4222000000000001;
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
        Status_CL *= 0.402;
        Status_D *= 0.31000000000000005;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 0.55;
        Status_CL *= 0.8;
        Status_D *= 1.44;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.6222;
    }
    
    // Adding a step to impact the prediction based on combined variables
    if (Edema === "Y" && Spiders === "Y" && Bilirubin < 2.6111) {
        Status_C *= 0.03;
        Status_CL *= 0.5;
        Status_D *= 1.4222000000000001;
    } else if (Edema === "Y" && Spiders === "Y") {
        Status_C *= 0.5;
        Status_CL *= 0.3;
        Status_D *= 1.4222000000000001;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
