
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1746", Drug="Placebo", Age="18713", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="294.0", Albumin="3.65", Copper="38.0", Alk_Phos="1877.0", SGOT="97.65", Tryglicerides="126.0", Platelets="283.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var AgeCategory = Age > -20000.11 ? "Old" : "Young";
    var SGOTCategory = SGOT > 100.11110000000001 ? "High" : "Low";
    
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.23;
        Status_CL = 0.2;
        Status_D = 1.5121999999999998;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4222;
        Status_CL = 1.04;
        Status_D = 1.4;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.6;
        Status_CL = 0.64;
        Status_D = 1.3221999999999998;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.12;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.86) {
        Status_C *= 0.5;
        Status_CL *= 2.08;
        Status_D *= 2.84;
    } else if (AgeCategory === "Old" && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 0.8;
        Status_D *= 1.3021999999999998;
    }
    
    if (Cholesterol > -201.11 && Cholesterol < 1495.56) {
        Status_C *= 0.8;
        Status_CL *= 0.1202;
        Status_D *= 0.2222;
    } else if (Cholesterol >= 2991.11) {
        Status_C *= 1.2222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.31000000000000005;
        Status_CL *= 1.04;
        Status_D *= 1.5;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7;
        Status_CL *= 0.5222;
        Status_D *= 1.1021999999999998;
    }
    
    if (Sex === "F") {
        Status_C *= 1.5221999999999998;
        Status_CL *= 1.31;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.6222;
        Status_D *= 0.30000000000000004;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.32000000000000006;
        Status_D *= 0.7121999999999999;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 1.2000000000000002;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 100.11110000000001) {
        Status_C *= 1.1;
        Status_CL *= 0.21;
        Status_D *= 0.8221999999999999;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.2;
        Status_D *= 0.6222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
