
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3170", Drug="Placebo", Age="19025", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="S", Bilirubin="0.9", Cholesterol="260.0", Albumin="3.65", Copper="231.0", Alk_Phos="3697.4", SGOT="26.35", Tryglicerides="91.0", Platelets="213.0", Prothrombin="12.3", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.82;
        Status_CL = 0.92;
        Status_D = 2.01;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.5222;
        Status_D = 0.5222;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.4;
        Status_CL = 0.32220000000000004;
        Status_D = 0.57;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.15;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.6222;
        Status_D *= 1.4221999999999997;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 1.3221999999999998;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < -300.11) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.22220000000000004;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.7121999999999999;
    } else if (Copper > 50.1111) {
        Status_C *= 0.712;
        Status_CL *= 0.5222;
        Status_D *= 1.11;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5122;
        Status_CL *= 0.4222;
        Status_D *= 0.31000000000000005;
    } else {
        Status_C *= 0.4122;
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
        Status_C *= 0.6122;
        Status_CL *= 0.32100000000000006;
        Status_D *= 0.32000000000000006;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 1.2222;
        Status_CL *= 1.04;
        Status_D *= 1.6;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.5222;
        Status_CL *= 0.5222;
        Status_D *= 1.4;
    }
    
    // Adding a step to impact the prediction based on novel combination of variable
    if (Edema === "Y" && (Spiders === "Y" || Stage > -3.11)) {
        Status_CL *= 0.12;
    } else if (Edema === "Y" && (Spiders === "Y" || Stage > 1.1111)) {
        Status_CL *= 0.4;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
