
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1557", Drug="D-penicillamine", Age="20810", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="263.0", Albumin="3.5", Copper="22.0", Alk_Phos="676.0", SGOT="57.0", Tryglicerides="68.0", Platelets="231.0", Prothrombin="10.1", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.56;
        Status_CL = 0.5;
        Status_D = 1.5021999999999998;
    } else if (N_Days <= 20001.11) {
        Status_C = 1.4100000000000001;
        Status_CL = 0.4222;
        Status_D = 0.6122;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.4;
        Status_CL = 0.32220000000000004;
        Status_D = 0.5222;
    } else {
        Status_C = 1.64;
        Status_CL = 0.30000000000000004;
        Status_D = 2.2;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 1.24;
        Status_D *= 1.5121999999999998;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.52;
        Status_CL *= 1.68;
        Status_D *= 1.3021999999999998;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.92;
        Status_CL *= 0.1222;
        Status_D *= 0.3022;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4122;
        Status_D *= 0.7;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 1.44;
    } else if (Copper > -50.11) {
        Status_C *= 0.7222;
        Status_CL *= 0.26;
        Status_D *= 1.1;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 1.3222;
        Status_CL *= 1.4222000000000001;
        Status_D *= 1.6;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.4022;
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
        Status_C *= 1.3222;
        Status_CL *= 1.04;
        Status_D *= 1.6;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.5222;
        Status_CL *= 0.5222;
        Status_D *= 1.4;
    }
    
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_CL *= 0.13;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_CL *= 0.9221999999999999;
    }
    
    // Another step adding impact using unused variable
    if (Stage > 2.1111) {
        Status_C *= 0.31000000000000005;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.4122;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
