
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="3149", Drug="D-penicillamine", Age="20354", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="232.0", Albumin="3.74", Copper="20.0", Alk_Phos="666.0", SGOT="54.25", Tryglicerides="139.0", Platelets="265.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.22220000000000004;
        Status_CL = 0.4;
        Status_D = 1.6121999999999999;
    } else if (N_Days <= 2000.11) {
        Status_C = 1.5222;
        Status_CL = 0.4222;
        Status_D = 1.4;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.61;
        Status_CL = 0.32220000000000004;
        Status_D = 1.301;
    } else {
        Status_C = 1.7000000000000002;
        Status_CL = 0.3;
        Status_D = 2.64;
    }
    
    if (Bilirubin > 3.7111) {
        Status_C *= 0.5;
        Status_CL *= 0.84;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.51;
        Status_CL *= 1.04;
        Status_D *= 1.5000000000000002;
    }
    
    if (Cholesterol > 201.11 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.91;
        Status_CL *= 0.1222;
        Status_D *= 0.31220000000000003;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.2100000000000002;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 0.32220000000000004;
    }
    
    // Adding a step based on the patient's sex
    if (Sex === "F") {
        Status_C *= 0.6;
        Status_CL *= 0.4;
        Status_D *= 0.4122;
    } else {
        Status_C *= 1.04;
        Status_CL *= 1.04;
        Status_D *= 1.3;
    }
    
    // Adding a step based on the patient's Drug
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    // Adding a step based on the combination of Age, Albumin and SGOT
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.7222;
        Status_CL *= 0.41100000000000003;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 1.3222;
        Status_CL *= 0.5222;
        Status_D *= 3.2;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.5222;
        Status_CL *= 0.5222;
        Status_D *= 1.4;
    }
    
    // Adding a step based on an unused variable Alk_Phos
    if (Number(Alk_Phos) > -500.11) {
        Status_C *= 0.32020000000000004;
        Status_CL *= 0.72;
        Status_D *= 0.31220000000000003;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
