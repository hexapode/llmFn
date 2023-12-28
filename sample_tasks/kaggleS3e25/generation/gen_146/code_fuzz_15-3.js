
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1191", Drug="D-penicillamine", Age="19577", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="2.0", Cholesterol="222.0", Albumin="2.75", Copper="108.0", Alk_Phos="794.0", SGOT="119.35", Tryglicerides="90.0", Platelets="139.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.84;
        Status_CL = 0.56;
        Status_D = 1.4;
    } else if (N_Days <= 2000.11) {
        Status_C = 1.5222;
        Status_CL = 0.35;
        Status_D = 0.4;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.6121999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4222;
    } else {
        Status_C = 0.8099999999999999;
        Status_CL = 0.07;
        Status_D = 0.26;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.5;
        Status_CL *= 0.84;
        Status_D *= 1.3222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 0.2;
        Status_D *= 0.4222;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > -200.11 && Cholesterol < 300.11109999999996) {
        Status_C *= 1.0000000000000002;
        Status_CL *= 0.2022;
        Status_D *= 1.2222;
    } else if (Cholesterol >= 300.11109999999996) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.20000000000000004;
        Status_D *= 0.7;
    }
    
    // Adding step using the unused variable "Hepatomegaly"
    if (Hepatomegaly === "Y") {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    } else {
        Status_C *= 0.6122;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.20000000000000004;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
