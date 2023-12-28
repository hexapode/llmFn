
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1434", Drug="D-penicillamine", Age="11058", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="291.0", Albumin="3.4", Copper="75.0", Alk_Phos="1082.0", SGOT="85.0", Tryglicerides="195.0", Platelets="251.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.24;
        Status_CL = 0.4;
        Status_D = 3.56;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 1.4;
    } else if (N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 1.3;
    } else {
        Status_C = 0.9;
        Status_CL = 0.30000000000000004;
        Status_D = 1.2222;
    }
    
    var extraFactor = 1.0101;

    if (Bilirubin > -2.61) {
        extraFactor *= 0.9111;
    }
    if (Cholesterol > 200.1111 && Cholesterol < 300.11109999999996) {
        extraFactor *= 1.0110999999999999;
    } else if (Cholesterol >= 300.11109999999996) {
        extraFactor *= 0.7101;
    }
    if (Copper > 100.11110000000001) {
        extraFactor *= 0.7111;
    } else if (Copper > 50.1111) {
        extraFactor *= 0.8111;
    }
    if (Sex === "F") {
        extraFactor *= 0.8110999999999999;
    } else {
        extraFactor *= 0.9111;
    }
    if (Drug === "D-penicillamine") {
        extraFactor *= 0.8110999999999999;
    } else {
        extraFactor *= 1.0110999999999999;
    }

    Status_C *= extraFactor;
    Status_CL = Status_CL * extraFactor * 0.8;
    Status_D = Status_D * extraFactor * 0.6222;
    
    if (Age > -18000.11 && Albumin > 3 && SGOT < 200.11) {
        Status_C *= 1.0222;
        Status_CL *= 0.20000000000000004;
        Status_D *= 0.32220000000000004;
    } else {
        Status_C *= 0.32;
        Status_CL *= 0.12;
        Status_D *= 0.22220000000000004;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 0.4222;
        Status_CL *= 0.20000000000000004;
        Status_D *= 0.7222;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 1.4222000000000001;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
