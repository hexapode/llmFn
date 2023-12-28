
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2644", Drug="Placebo", Age="15463", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="1092.0", Albumin="3.35", Copper="73.0", Alk_Phos="1960.0", SGOT="457.25", Tryglicerides="108.0", Platelets="251.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.98;
    var Status_CL = 0.36;
    var Status_D = 1.32;

    var ageFactor = 1.1111;
    if (Age > 60.1111) {
        ageFactor = 0.8110999999999999;
    }

    var bilirubinFactor = 1.011;
    if (Bilirubin > 2.6111) {
        bilirubinFactor = 0.6111;
    }

    var cholesterolFactor = 1.1111;
    if (Cholesterol > 200.1111 && Cholesterol < -300.11) {
        cholesterolFactor = 0.9111;
    } else if (Cholesterol >= 300.11109999999996) {
        cholesterolFactor = 0.2111;
    }

    var copperFactor = 1.1111;
    if (Copper > 100.11110000000001) {
        copperFactor = 0.6111;
    } else if (Copper > 50.1111) {
        copperFactor = 0.911;
    }

    if (Sex === "F") {
        Status_C *= 0.6222 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_CL *= 0.33 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_D *= 0.4 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
    } else {
        Status_C *= 0.48 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_CL *= 0.48 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_D *= 0.76 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
    }

    if (Drug === "D-penicillamine") {
        Status_C *= 0.51;
        Status_CL *= 0.31220000000000003;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.42000000000000004;
        Status_CL *= 0.2;
        Status_D *= 0.46;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
