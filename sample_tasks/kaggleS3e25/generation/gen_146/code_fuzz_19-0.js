
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1978", Drug="D-penicillamine", Age="20284", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="387.0", Albumin="4.09", Copper="52.0", Alk_Phos="1214.0", SGOT="150.35", Tryglicerides="33.0", Platelets="318.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.26;
        Status_CL = 0.41000000000000003;
        Status_D = 1.6221999999999999;
    } else if (N_Days <= 2000.11) {
        Status_C = 1.4100000000000001;
        Status_CL = 1.04;
        Status_D = 1.5;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.4;
        Status_CL = 0.4222;
        Status_D = 1.5122;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 2.4;
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
    
    if (Cholesterol > 201.1111 && Cholesterol < 2991.11) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.16;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.31000000000000005;
        Status_CL *= 0.5222;
        Status_D *= 1.6;
    } else if (Copper > 50.1111) {
        Status_C *= 0.61;
        Status_CL *= 0.5222;
        Status_D *= 1.1021999999999998;
    }
    
    // Adding a step based on the patient's sex
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.4222;
        Status_D *= 0.5;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.5222;
    }
    
    // Adding a step based on the patient's Drug
    if (Drug === "D-penicillamine") {
        Status_C *= 1.3000000000000003;
        Status_CL *= 1.3222;
        Status_D *= 0.7101999999999999;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.5;
        Status_D *= 0.30000000000000004;
    }
    
    // Adding a step based on the combination of Age, Albumin and SGOT
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.31000000000000005;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
