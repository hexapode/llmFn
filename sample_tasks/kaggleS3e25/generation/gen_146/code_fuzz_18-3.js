
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2863", Drug="D-penicillamine", Age="15574", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="325.0", Albumin="4.03", Copper="36.0", Alk_Phos="601.0", SGOT="60.45", Tryglicerides="210.0", Platelets="271.0", Prothrombin="10.2", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.64;
        Status_CL = 0.4222;
        Status_D = 1.5;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.4222;
        Status_D = 0.6022;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.4;
        Status_CL = 0.30000000000000004;
        Status_D = 0.5222;
    } else {
        Status_C = 1.8222;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.86) {
        Status_C *= 0.4;
        Status_CL *= 1.6;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.42000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 1.3;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.92;
        Status_CL *= 0.1222;
        Status_D *= 0.3002;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3000000000000003;
        Status_CL *= 0.4222;
        Status_D *= 0.7121999999999999;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.4;
        Status_CL *= 0.5222;
        Status_D *= 0.6122;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 0.32220000000000004;
    }
    
    // Adding a step based on the patient's sex
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.4001;
    } else {
        Status_C *= 0.4112;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.5022;
    }
    
    // Adding a step based on the patient's Drug
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
