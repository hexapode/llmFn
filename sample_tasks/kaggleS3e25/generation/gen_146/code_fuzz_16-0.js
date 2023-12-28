
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.84;
        Status_CL = 1.68;
        Status_D = 1.5;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.5222;
        Status_CL = 1.28;
        Status_D = 0.4;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.61;
        Status_CL = 0.6;
        Status_D = 0.84;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.12;
        Status_D = 0.64;
    }
    
    if (Bilirubin > 1.86) {
        Status_C *= 0.5;
        Status_CL *= 0.84;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 1.4000000000000001;
    }
    
    // Adding step using the variable "Drug"
    if (Drug === "D-penicillamine") {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.30000000000000004;
    } else if (Drug === "Placebo") {
        Status_C *= 0.6122;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.30000000000000004;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > -201.11 && Cholesterol < 2991.11) {
        Status_C *= 0.8;
        Status_CL *= 0.1222;
        Status_D *= 0.64;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.02;
        Status_D *= 0.7;
    }
    
    // Adding step using the unused variable "Copper"
    if (Copper > 100.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
