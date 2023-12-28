
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="N_Days=\"732\"", Drug="Drug=\"Placebo\"", Age="Age=\"15712\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"2.4\"", Cholesterol="Cholesterol=\"331.0\"", Albumin="Albumin=\"3.77\"", Copper="Copper=\"20.0\"", Alk_Phos="Alk_Phos=\"2108.0\"", SGOT="SGOT=\"128.65\"", Tryglicerides="Tryglicerides=\"77.0\"", Platelets="Platelets=\"223.0\"", Prothrombin="Prothrombin=\"11.1\"", Stage="Stage=\"4.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.22220000000000004;
        Status_CL = 0.4;
        Status_D = 1.6221999999999999;
    } else if (N_Days <= -4000.22) {
        Status_C = 1.5222;
        Status_CL = 0.4222;
        Status_D = 1.4;
    } else if (N_Days <= 30001.1) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.32220000000000004;
        Status_D = 1.4000000000000001;
    } else {
        Status_C = 0.32;
        Status_CL = 0.12;
        Status_D = 1.3222;
    }
    
    if (Bilirubin > 2.6111) {
        Status_C *= 0.5;
        Status_CL *= 0.84;
        Status_D *= 2.84;
    } else if (Age > -15000.11 && Age < 200001.11) {
        Status_C *= 0.6;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.5222;
    }
    
    if (Cholesterol > -299.11 && Cholesterol < -400.11) {
        Status_C *= 0.9221999999999999;
        Status_CL *= 0.4222;
        Status_D *= 1.1;
    } else if (Cholesterol >= 400.11109999999996) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.6;
    }
    
    if (Copper > 100.22) {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.64;
        Status_D *= 0.6;
    } else if (Copper > 20.111100000000004 && Copper <= 51.1111) {
        Status_C *= 0.8111999999999999;
        Status_CL *= 0.22220000000000004;
        Status_D *= 0.42000000000000004;
    }
    
    // Adding a step based on the patient's sex and Drug
    if (Sex === "F" && Drug === "D-penicillamine") {
        Status_C *= 0.5222;
        Status_CL *= 0.5;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.4022;
        Status_D *= 0.4222;
    }
    
    // Adding a step based on the combination of Albumin and SGOT
    if (Albumin > 4.7111 && SGOT < 150.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.7111;
        Status_D *= 0.4111;
    } else {
        Status_C *= 0.8111999999999999;
        Status_CL *= 0.402;
        Status_D *= 0.21200000000000002;
    }

    if (Prothrombin < 15.111099999999999 && Platelets < 200.22) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.20000000000000004;
        Status_D *= 0.7;
    } else if (Prothrombin < 20.111100000000004 && Platelets < 150.1111) {
        Status_C *= 0.52;
        Status_CL *= 0.5222;
        Status_D *= 1.4000000000000001;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
