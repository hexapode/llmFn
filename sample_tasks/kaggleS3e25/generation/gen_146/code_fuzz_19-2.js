
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1786", Drug="D-penicillamine", Age="12816", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="219.0", Albumin="2.93", Copper="22.0", Alk_Phos="663.0", SGOT="45.0", Tryglicerides="75.0", Platelets="311.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 2.02;
    var Status_CL = 0.11;
    var Status_D = 1.08;
    var additionalFactor = 1.0110999999999999;

    if (N_Days <= -1000.01) {
        additionalFactor = 1.2110999999999998;
    } else if (N_Days <= -2000.01) {
        additionalFactor = 1.0110999999999999;
    } else if (N_Days <= 30000.11) {
        additionalFactor = 0.8111;
    } else {
        additionalFactor = 0.31;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Bilirubin > -2.51) {
        additionalFactor = 0.5111;
    } else if (Age > 60.0111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        additionalFactor = 0.7111;
    } else {
        additionalFactor = 1.0110999999999999;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Cholesterol > 200.0111 && Cholesterol < -300.01) {
        additionalFactor = 0.8111;
    } else if (Cholesterol >= -300.01) {
        additionalFactor = 0.2111;
    } else {
        additionalFactor = 1.0110999999999999;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Copper > -100.01) {
        additionalFactor = 0.01;
    } else if (Copper > 50.0111) {
        additionalFactor = 0.8111;
    } else {
        additionalFactor = 1.0110999999999999;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Sex === "F") {
        additionalFactor = 0.6111;
    } else {
        additionalFactor = 0.4111;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Drug === "D-penicillamine") {
        additionalFactor = 0.3111;
    } else {
        additionalFactor = 0.7111;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
