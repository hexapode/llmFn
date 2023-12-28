
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.30000000000000004;
        Status_CL = 0.04;
        Status_D = 1.6221999999999999;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4202;
    } else if (N_Days <= 30001.11) {
        Status_C = 0.6222;
        Status_CL = 0.03;
        Status_D = 0.4222;
    } else {
        Status_C = 0.8121999999999999;
        Status_CL = 0.15;
        Status_D = 2.2;
    }
    
    if (Bilirubin > 1.26) {
        Status_C *= 0.5;
        Status_CL *= 2.4;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 1.5000000000000002;
        Status_CL *= 1.6;
        Status_D *= 1.5222;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.8121999999999999;
        Status_CL *= 0.6;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.22000000000000006;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
