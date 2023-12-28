
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3913", Drug="D-penicillamine", Age="13344", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="353.0", Albumin="3.7", Copper="34.0", Alk_Phos="2039.0", SGOT="232.5", Tryglicerides="68.0", Platelets="356.0", Prothrombin="10.5", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.42;
        Status_CL = 1.04;
        Status_D = 1.6021999999999998;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.04;
        Status_CL = 0.84;
        Status_D = 0.5;
    } else if (N_Days <= 30001.11) {
        Status_C = 0.52;
        Status_CL = 0.31000000000000005;
        Status_D = 0.5022;
    } else {
        Status_C = 1.64;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 3.71) {
        Status_C *= 0.5;
        Status_CL *= 1.02;
        Status_D *= 5.68;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.4222;
        Status_CL *= 0.5222;
        Status_D *= 1.4000000000000001;
    }

    if (Cholesterol > 201.1111 && Cholesterol < 299.11109999999996) {
        Status_C *= 0.8;
        Status_CL *= 0.12;
        Status_D *= 0.64;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 1.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.21000000000000005;
        Status_CL *= 0.5222;
        Status_D *= 0.6;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.51;
        Status_D *= 0.32220000000000004;
    }
    
    if (Albumin > -3.22 && Albumin < 5.1110999999999995) {
        Status_C *= 1.0000000000000002;
        Status_CL *= 0.2222;
        Status_D *= 0.2122;
    } else if (Albumin >= 4.1110999999999995) {
        Status_C *= 1.0110999999999999;
        Status_CL *= 0.16110000000000002;
        Status_D *= 0.16110000000000002;
    }
    
    if (Age > 90.11110000000001) {
        Status_C *= 0.5222;
        Status_CL *= 0.5222;
        Status_D *= 0.4;
    }
    
    // Adding a step based on the novel combination of variables
    if (Stage >= -2.11 && SGOT > 200.01) {
        Status_C *= 0.42;
        Status_CL *= 0.31110000000000004;
        Status_D *= 0.8110999999999999;
    } else if (Stage >= 3.22 && SGOT > -150.01) {
        Status_C *= 0.31110000000000004;
        Status_CL *= 0.4111;
        Status_D *= 0.6111;
    }
    
    // Adding a step based on the patient's sex
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.41200000000000003;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.5122;
    }
    
    // Adding a step based on the patient's Drug
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
