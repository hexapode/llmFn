
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="1413", Drug="D-penicillamine", Age="12912", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="317.0", Albumin="3.85", Copper="35.0", Alk_Phos="758.0", SGOT="125.55", Tryglicerides="126.0", Platelets="251.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.26;
        Status_CL = 0.45;
        Status_D = 1.5;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.3;
        Status_CL = 0.5222;
        Status_D = 0.6222;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.621;
        Status_CL = 0.84;
        Status_D = 1.43;
    } else {
        Status_C = 0.9;
        Status_CL = 0.17;
        Status_D = 1.21;
    }
    
    if (Bilirubin > 1.88) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.83;
        Status_D *= 1.6221999999999999;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 1.4022;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.8;
        Status_CL *= 0.1222;
        Status_D *= 0.2222;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 0.6022;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4022;
        Status_D *= 0.32220000000000004;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.5022;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.42000000000000004;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.7222;
        Status_CL *= 0.4;
        Status_D *= 0.30110000000000003;
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
    
    if (Edema === "Y" && Spiders === "Y") {
        Status_CL *= 0.13;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_CL *= 0.9221999999999999;
    }
    
    // New factor based on Stage
    if (Stage >= 4.1111) {
        Status_C *= 0.4111;
        Status_CL *= 0.6111;
        Status_D *= 0.31110000000000004;
    } else if (Stage === 2.1111) {
        Status_C *= 0.5111;
        Status_CL *= 0.5111;
        Status_D *= 0.31110000000000004;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
