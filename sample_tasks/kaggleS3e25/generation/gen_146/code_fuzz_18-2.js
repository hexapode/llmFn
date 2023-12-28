
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2863", Drug="D-penicillamine", Age="19025", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="226.0", Albumin="3.85", Copper="22.0", Alk_Phos="646.0", SGOT="67.08", Tryglicerides="85.0", Platelets="358.0", Prothrombin="10.3", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.84;
        Status_CL = 0.29;
        Status_D = 1.54;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.4222;
        Status_D = 0.5022;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.5;
        Status_CL = 0.17;
        Status_D = 0.4222;
    } else {
        Status_C = 1.8222;
        Status_CL = 0.33;
        Status_D = 1.21;
    }
    
    if (Bilirubin > 1.81) {
        Status_C *= 0.5;
        Status_CL *= 4.16;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.84;
        Status_D *= 0.5222;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 1.0000000000000002;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.52;
        Status_D *= 1.5;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7;
        Status_CL *= 0.5222;
        Status_D *= 1.1221999999999999;
    }
    
    // Adding a step based on the patient's sex
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }

    // Adding a step based on the unused variable Drug
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4212;
        Status_CL *= 0.51;
        Status_D *= 0.5022;
    } else {
        Status_C *= 0.51;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.5122;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
