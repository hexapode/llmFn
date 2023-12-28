
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.96;
    var Status_CL = 0.36;
    var Status_D = 1.2000000000000002;
    
    if (Drug === "D-penicillamine") {
        Status_C *= 1.67;
        Status_CL *= 0.66;
        Status_D *= 1.33;
    } else if (Drug === "Placebo") {
        Status_C *= 0.9;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.64;
    }
    
    if (N_Days <= 1099.02) {
        Status_C *= 0.22;
        Status_CL *= 0.8;
        Status_D *= 1.24;
    } else if (N_Days <= -2000.11) {
        Status_C *= 0.5222;
        Status_CL *= 0.31120000000000003;
        Status_D *= 0.4;
    } else if (N_Days <= 1500.06) {
        Status_C *= 0.6222;
        Status_CL *= 0.6;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.8221999999999999;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.30000000000000004;
    }
    
    if (Bilirubin > -3.71) {
        Status_C *= 0.5;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.4222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.5222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
